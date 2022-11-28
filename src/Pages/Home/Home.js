import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home');

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-available-and-advertise-products')
        .then(res => res.json())
        .then(productData => {
            setProducts(productData)
        })
    })

    return (
        <section className='container mt-5'>
            <Slider></Slider>

            <h4>Category</h4>
            <hr />
            <Categories></Categories>


            <h4 className='mt-5'>Advertise</h4>
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
                                    {/* <p className="card-text"> <b>Posted By:</b> {product.seller_name} </p>
                                    <p className="card-text"> <b>Phone:</b> {product.phone} </p> */}
                                   
                                    {/* <div className="d-grid gap-2">
                                        <Link to='/' className="btn btn-primary">Book Now</Link>
                                    </div>  */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default Home;



