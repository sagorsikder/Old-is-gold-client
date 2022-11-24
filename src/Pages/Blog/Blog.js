import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className='w-3/4 mx-auto '>
            <h2 className='text-3xl font-semibold my-3'>1. What are the different ways to manage a state in a React application?</h2>
            <p className='mb-6'>Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.

            There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.</p>
            <h2 className='text-3xl  font-semibold my-3'>2.  How does prototypical inheritance work?</h2>
            <p className='mb-6'>In programming, we often want to take something and extend it.

                For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We had like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                Prototypal inheritance is a language feature that helps in that.</p>
            <h2 className='text-3xl  font-semibold my-3'>3. What is a unit test? Why should we write unit tests?</h2>
            <p className='mb-6'>Lets start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
            <h2 className='text-3xl  font-semibold my-3'>4. React vs. Angular vs. Vue?</h2>
            <p className='mb-6'>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
        </div>
    );
};

export default Blog;