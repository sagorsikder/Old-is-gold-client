import React from 'react';
import bikes from '../../../assets/images/about_us/bikes.jpg'
const About = () => {

    return (
        <div className="hero my-12">
  <div className="hero-content flex flex-col">
   <div className='relative h-full  mb-12 w-4/5'>

   <h4 className='text-blue-600 text-center font-semibold text-5xl mb-2'>About Us</h4>
     <img src={bikes} alt='good' className="lg:w-4/5 mx-auto h-full  rounded-lg shadow-2xl" />
    

     </div>
    <div className='w-full'>
       
      <h1 className="text-5xl font-bold">Always stock available<br />
       Best bike collection <br /> On-time delivery</h1>
      <p className="py-6">The Second hand bike price list is based on the make, model, variant, specifications, and year. The pre-owned bikes are from popular brands like Hero MotoCorp, TVS, Bajaj, etc </p>

      <p className="py-6">Hero Motor, TVS, Bajaj, Yamaha etc,all brand bike is available for sell and buy.Maximum client satisfied with this website. </p>
      <button className="btn btn-secondary rounded "> More Information</button>
    </div>
  </div>
</div>
    );
};

export default About;