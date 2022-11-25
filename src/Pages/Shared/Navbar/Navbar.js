import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from './../../../assets/Logo.jpg';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const menuItems = <React.Fragment>
        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/">Blogs</Link></li>
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
                <Link type="button" className="btn btn-outline-primary me-2">Login</Link>
                <Link to='/signup' type="button" className="btn btn-outline-primary">Sign-up</Link>
            </div>
        </header>
    );
};

export default Navbar;