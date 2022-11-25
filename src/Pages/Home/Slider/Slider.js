import React from 'react';

import './Slider.css';


const Slider = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://1.bp.blogspot.com/-pbDffAW9Ays/YbHJLuVnRPI/AAAAAAAAaFw/NGhGhgeL98UV3Cq5h5aSfhScE4GA8EuDgCNcBGAsYHQ/s900/mobail-banner-design_900.jpg" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://dcassetcdn.com/design_img/3769311/43775/22912908/fm5x6ha4v352h8hz60m1hx2g42_image.jpg" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-psd/new-phone-pack-mock-up_23-2148620269.jpg?w=2000" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;