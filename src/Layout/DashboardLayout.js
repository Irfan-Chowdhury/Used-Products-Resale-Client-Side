import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li><Link to='/dashboard/all-sellers'>Manage Sellers</Link></li>
                        <li><Link to='/dashboard/all-users'>Manage Buyers</Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>
            
            <div style={{marginBottom:'150px'}}></div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;