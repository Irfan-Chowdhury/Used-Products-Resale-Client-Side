import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    axios.get(`https://used-products-resale-market-server.vercel.app/orders/${user.email}`)
    .then(function (response) {
        setOrders(response.data);
    })
    .catch(function (error) {
        // console.log(error);
    })
    .finally(function () {
        // always executed
    });


    return (
        <div>
            <h3 className='text-center'>My Total Orders : {orders.length}</h3>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col" className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order,i) =>
                            <tr key={order._id}>
                                <th scope="row">{i+1}</th>
                                <td>{order.product_title}</td>
                                <td><img src={order.image} alt="" style={{height:'40px',width:'50px'}} /></td>
                                <td>৳ {order.price}</td>
                                {
                                    order.order_status==='1' ?
                                    <td><span className="badge bg-success">Done</span></td>
                                    :
                                    <td><span className="badge bg-dark">Pending</span></td>
                                }
                                {
                                    order.payment_status==='pending' ?
                                    <td><span className="badge bg-danger">Pending</span></td>
                                    :
                                    <td><span className="badge bg-success">Done</span></td>
                                }
                                {
                                    order.payment_status==='pending' ?
                                    <td>
                                        <Link to={`/buyer-dashboard/orders/checkout/${order._id}`} className='btn btn-success'>Pay Now</Link>
                                    </td>
                                    :
                                    <td>
                                        <button className='btn btn-warning'>Paid</button>
                                    </td>
                                }
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;