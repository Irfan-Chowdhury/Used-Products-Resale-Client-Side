import React from 'react';

const Footer = () => {
    return (
        <section className="container my-5 text-center text-lg-start text-white" style={{backgroundColor:"#45526e"}}>
            <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                    <div className="p-3">© 2020 Copyright:
                        <a className="text-white" style={{textDecoration:'none'}} href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>
                </div>
            </div>


            {/* <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a href='/' className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                    <i className="fab fa-facebook-f"></i>                    
                </a>
                <a href='/' className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href='/' className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                    <i className="fab fa-google"></i>
                </a>
                <a href='/' className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                    <i className="fab fa-instagram"></i>
                </a>
            </div> */}
        </section>
    );
};

export default Footer;


