import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { MdVerifiedUser } from 'react-icons/md';
import BookingModal from './BookingModal/BookingModal';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CategoryWiseProducts = () => {
    useTitle('Category Wise Products');
    const { _id, title } = useLoaderData();
    const {successMessage} = useContext(AuthContext);


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-available-products')
            .then(res => res.json())
            .then(productData => {
                const productsFilter = productData.filter(product => product.category_id === _id);
                setProducts(productsFilter)
            })
    })

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleSubmit = event => {
        event.preventDefault();
        const form  = event.target;
        const category_id = _id;
        const product_id = form.product_id.value;
        const image = form.image.value;
        const order_status = form.order_status.value;
        const payment_status = form.payment_status.value;
        const payment_method = form.payment_method.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const date = form.date.value;
        const buyer_name = form.buyer_name.value;
        const buyer_email = form.buyer_email.value;
        const price = form.price.value;
        const buyer_phone = form.buyer_phone.value;
        const meeting_location = form.meeting_location.value;

        const order = {
            category_id,
            product_id,
            image,
            order_status,
            payment_status,
            payment_method,
            seller_name,
            seller_email,
            date,
            buyer_name,
            buyer_email,
            price,
            buyer_phone,
            meeting_location
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if(result.acknowledged){
               form.reset();
               successMessage();
            }
            // setLoading(false);
            // successMessage();
            // navigate('/my-products')
        })
        .catch(err => console.error(err));

    }




    return (
        <div className='container'>
            <h1 className='text-center'>{title}</h1>
            <hr />
            <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product =>
                        <div key={product._id} className="col">
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt="..." style={{ height: '350px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text"> <b>Location :</b> {product.location}</p>
                                    <p className="card-text"> <b>Price :</b> ৳ {product.resale_price}</p>
                                    <p className="card-text">
                                        <b>Posted By:</b> {product.seller_name}
                                        {
                                            sellers.length > 0 &&
                                                sellers?.find(seller => seller.email === product.seller_email).verify === 1 ?
                                                <span className="ms-1 text-success"><MdVerifiedUser></MdVerifiedUser></span>
                                                :
                                                <></>
                                        }

                                    </p>
                                    <p className="card-text"> <b>Phone:</b> {product.phone} </p>

                                    <div className="d-grid gap-2">
                                        <Link to='/' className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#bookingModal-${product._id}`}>Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            <BookingModal handleSubmit={handleSubmit} product={product}></BookingModal>
                        </div>
                    )
                }

            </div>



        </div>
    );
};

export default CategoryWiseProducts;