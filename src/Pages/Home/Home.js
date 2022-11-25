import React from 'react';
import useTitle from '../../hooks/useTitle';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home');

    return (
        <section className='container mt-5'>
            <Slider></Slider>

            <h4>Category</h4>
            <hr />

            <Categories></Categories>

        </section>
    );
};

export default Home;



