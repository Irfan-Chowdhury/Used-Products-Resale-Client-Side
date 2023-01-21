import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import OrderAndPay from './OrderAndPay';

const MyWishlist = () => {

    const {user, successMessage} = useContext(AuthContext);
    const {data: wishlists = []} = useQuery({
        queryKey: ['wishlists'],
        queryFn: async() =>{
            const res = await fetch(`https://used-products-resale-market-server.vercel.app/wishlists/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className='text-center'>My Total Wishlist : {wishlists.length}</h3>  
            <hr />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Price</th>
                        <th scope="col" className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlists?.map((wishlist,i) =>
                            <tr key={wishlist._id}>
                                <th scope="row">{i+1}</th>
                                <td>{wishlist.product_title}</td>
                                <td><img src={wishlist.image} alt="" style={{height:'40px',width:'50px'}} /></td>
                                <td>৳ {wishlist.price}</td>   
                                <td>
                                    <OrderAndPay wishlist={wishlist}></OrderAndPay>
                                </td>                             
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyWishlist;