import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {

    const { user, successMessage } = useContext(AuthContext);

    // All Categories
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })

    // Products fetch by current user email
    const url = `http://localhost:5000/products?seller_email=${user?.email}`;
    const { data: products = [],refetch} = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //    authorization: `bearer ${localStorage.getItem('accessToken')}` 
                // }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleAdvertise = (productId, advertiseValue) => {
        const productData = {
            advertise: advertiseValue
        };
        fetch(`http://localhost:5000/products/${productId}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(() => {
            successMessage();
            refetch();
        });
    }


    // Product Delete
    const handleDelete = (productId) => {
        console.log(productId);

        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${productId}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    successMessage();
                }
            });
        }
    }

    return (
        <div className='container'>
            {
                products.length === 0 ?
                <>
                    <div className="card">
                        <div className="card-body text-center">
                            <h1 className='text-danger'>No Product Found</h1>
                        </div>
                    </div>
                </> 
                :
                <></>
            }

            <table className="table table-success table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Resale Price</th>
                        <th scope="col">Sale Status</th>
                        <th scope="col">Advertise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product,i) =>
                            <tr key={product._id}>
                                <th scope="row">{i+1}</th>
                                <td>
                                    {
                                        categories.length > 0 &&
                                        categories?.find(category => category._id===product.category_id).title
                                    }
                                </td>
                                <td><img src={product.image} style={{height:'50px',width:'50px'}} alt=""/></td>
                                <td>{product.title}</td>
                                <td>৳ {product.resale_price}</td>
                                <td>
                                    {
                                        product.status===0 ?
                                        <p className='p-2 badge bg-warning text-dark'>Available</p>
                                        :
                                        <p className='p-2 badge bg-success'>Sold</p>
                                    }
                                </td>
                                <td>
                                    {
                                        product.status===0 ?
                                        <>
                                            {
                                                product.advertise === 0 ?
                                                <button onClick={()=>handleAdvertise(product._id,1)} className='ms-2 btn btn-outline-success text-dark'><b>Make</b></button>
                                                :
                                                <button onClick={()=>handleAdvertise(product._id,0)} className='ms-2 btn btn-dark text-light'><b>Undo</b></button>
                                            }
                                        </>
                                        :
                                        <p className='text-danger'><b>Not Applicable</b></p>
                                    }
                                </td>
                                <td>

                                    <button onClick={()=>handleDelete(product._id)} className='ms-2 btn btn-danger'>Delete</button>
                                </td>
                            </tr>   
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;