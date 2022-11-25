import React from 'react';
import About from './About/About';
import Advertisement from './advertisement/Advertisement';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Category></Category>
            <About></About>

        </div>
    );
};

export default Home;