import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const BuyerboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="row container">
                <div className="col-md-3">
                    <div id="list-example" className="list-group">
                        <Link className="list-group-item list-group-item-action" to='/buyer-dashboard/my-orders'>My Orders</Link>
                        <Link className="list-group-item list-group-item-action" to='/buyer-dashboard/my-wishlist'>My Wishlist</Link>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>

            <div style={{ marginBottom: '150px' }}></div>

            <Footer></Footer>
        </div>
    );
};

export default BuyerboardLayout;