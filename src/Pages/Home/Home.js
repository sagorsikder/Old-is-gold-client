import React from 'react';
import About from './About/About';
import Advertisement from './advertisement/Advertisement';
import Banner from './Banner/Banner';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <About></About>

        </div>
    );
};

export default Home;