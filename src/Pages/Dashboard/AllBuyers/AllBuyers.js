import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { MdVerifiedUser } from 'react-icons/md';

const AllBuyers = () => {
    const {user, successMessage} = useContext(AuthContext);

    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/all-buyers');
            const data = await res.json();
            return data;
        }
    });



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
            <h3 className='text-center'>All Buyers</h3>
            <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers?.map((buyer, i) => 
                            <tr>
                                <th scope="row">{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>  
                                <td>
                                    <button onClick={() => handleDeleteSeller(buyer._id)} className='ms-2 btn btn-danger'>Delete</button>
                                </td>
                                
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;