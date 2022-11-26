import React from 'react';
import useTitle from '../../Hooks/useTitle';
import About from './About/About';
import Advertisement from './advertisement/Advertisement';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    useTitle('Old Is Gold')

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