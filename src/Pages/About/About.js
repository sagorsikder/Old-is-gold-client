import React from 'react';
import useTitle from '../../Hooks/useTitle';

const About = () => {
    useTitle('about')
    return (
        <div>
            <h2>Secret about us!!!</h2>
        </div>
    );
};

export default About;