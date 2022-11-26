import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryWiseProducts = () => {
    const { _id, title } = useLoaderData();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-available-products')
        .then(res => res.json())
        .then(productData => {
            const productsFilter = productData.filter(product=> product.category_id === _id);
            setProducts(productsFilter)
        })
    })

    return (
        <div className='container'>

            <h1 className='text-center'>{title}</h1>
            <hr />
            <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => 

                        <div className="col">
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt="..." style={{height:'350px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text"> <b>Location :</b> {product.location}</p>
                                    <p className="card-text"> <b>Price :</b> ৳ {product.resale_price}</p>
                                    <p className="card-text"> <b>Posted By:</b> {product.seller_name} </p>
                                    <p className="card-text"> <b>Phone:</b> {product.phone} </p>

                                    <div class="d-grid gap-2">
                                        <Link to='/' class="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default CategoryWiseProducts;