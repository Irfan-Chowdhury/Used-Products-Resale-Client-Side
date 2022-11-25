import React from 'react';
import useTitle from '../../../hooks/useTitle';

const NotFound404 = () => {
    useTitle('404 | Page Not Found');

    return (
        <div className='container text-center'>
            <div className="card mt-5">
                <div className="card-body">
                    {/* <img width={100} src="https://static.vecteezy.com/system/resources/previews/002/852/982/non_2x/modern-colorful-404-page-not-found-error-background-illustration-404-error-background-can-use-for-web-banner-infographics-vector.jpg" alt="" srcset="" /> */}
                    <h1>404 | Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound404;