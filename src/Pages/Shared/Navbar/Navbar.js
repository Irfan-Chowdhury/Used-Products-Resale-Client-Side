import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
                {/* {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link to="/login">Login</Link></li>} */}
    </React.Fragment>

    return (
        <section>
            <nav className="container navbar navbar-expand-sm bg-primary navbar-primary justify-content-center fixed-top">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <a className="nav-link text-light" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="/">Login</a>
                    </li> */}
                    {menuItems}

                </ul>
            </nav>
        </section>
    );
};

export default Navbar;