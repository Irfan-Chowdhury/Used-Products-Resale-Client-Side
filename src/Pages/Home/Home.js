import React from 'react';
import useTitle from '../../hooks/useTitle';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home');

    return (
        <section className='container mt-5'>
            <Slider></Slider>
        </section>
    );
};

export default Home;