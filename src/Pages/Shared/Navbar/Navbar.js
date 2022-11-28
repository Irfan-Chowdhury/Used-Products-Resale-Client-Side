import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import logo from './../../../assets/Logo.jpg';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            // localStorage.removeItem("travelServiceToken");
         })
        .catch(error => console.error(error));
    }

    // const {data: sellers = []} = useQuery({
    //     queryKey: ['sellers'],
    //     queryFn: async() =>{
    //         const res = await fetch('http://localhost:5000/all-sellers');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    const email = user?.email;
    const [seller, setSeller] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res => res.json())
        .then(data => setSeller(data))
    });


    const menuItems = <React.Fragment>
        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/blogs">Blogs</Link></li>
        {
            user?.uid ?
            <>
                {
                    seller && (seller.role==='seller' || seller.role==='admin') ?
                    <>
                        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/add-product">Add Product</Link></li>
                        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/my-products">My Products</Link></li>
                    </>
                    :
                    <></>
                }
                <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/dashboard">Dashboard</Link></li>
            </>
            :
            <>
            </>
        }
    </React.Fragment>

    return (
        <header className="container p-2 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={logo} alt="" width="50" height="40" />
                <span className="navbar-brand" href="/">
                    <h4 className='ms-2'>E-Recycle-Phone</h4>
                </span>
            </a>
            

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                {menuItems}
            </ul>

            <div className="col-md-3 text-end">
                {
                    user?.email ?
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleLogOut} type="button" className="btn btn-outline-danger">Logout</button>
                        <div className="ms-2 dropdown text-end">
                            <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user?.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="/">{user?.displayName}</a></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <>
                        <Link to='/login' type="button" className="btn btn-outline-primary me-2">Login</Link>
                        <Link to='/signup' type="button" className="btn btn-outline-primary">Sign-up</Link>
                    </>                    
                }

            </div>
        </header>
    );
};

export default Navbar;