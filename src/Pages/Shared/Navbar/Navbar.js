import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/Logo.jpg';
const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link px-2 link-dark" to="/">Blogs</Link></li>
    </React.Fragment>

    return (
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={logo} alt="" width="50" height="30" />
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                {menuItems}
            </ul>

            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-primary me-2">Login</button>
                <button type="button" class="btn btn-primary">Sign-up</button>
            </div>
        </header>
    );
};

export default Navbar;