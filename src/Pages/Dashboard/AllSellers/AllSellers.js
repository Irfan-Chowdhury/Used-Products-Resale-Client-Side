import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { MdVerifiedUser } from 'react-icons/md';

const AllSellers = () => {

    const {user, successMessage} = useContext(AuthContext);
    // console.log('current-user',user.uid);

    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/all-sellers');
            const data = await res.json();
            return data;
        }
    });


    const handleMakeVerify = (id, verifyValue) => {
        const verifyData = {
            verify: verifyValue
        };

        fetch(`http://localhost:5000/all-sellers/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(verifyData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                successMessage();
                refetch();
            }
        })
    }

    const handleDeleteSeller = id => {
        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE', 
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    successMessage();
                    refetch();
                }
            })
        }
    }

    return (
        <div>
            <h3 className='text-center'>All Sellers</h3>
            <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col"  className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers?.map((seller, i) => 
                            <tr>
                                <th scope="row">{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                {
                                    seller.verify===1 ?
                                    <td><p className="badge bg-success"><MdVerifiedUser></MdVerifiedUser> Verified</p></td>
                                    :
                                    <td><p className="badge bg-dark">Unverified </p></td>
                                }
                                <td>
                                    {
                                        seller.verify===0 ?
                                        <button onClick={() => handleMakeVerify(seller._id,1)} className='btn btn-success'>Make Verify</button>
                                        :
                                        <button onClick={() => handleMakeVerify(seller._id,0)} className='btn btn-dark'>Undo Verify</button>
                                    }
                                    <button onClick={() => handleDeleteSeller(seller._id)} className='ms-2 btn btn-danger'>Delete</button>
                                </td>
                                
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;