import React from 'react';
import './bannerPart.css';

const BannerPart = ({slide}) => {

    const {image,id,prev,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-image w-full'>
        <img src={image}alt='carusel img'  className="w-full carosel-pic" />
        </div>
    
        <div className="absolute flex justify-end transform -translate-y-1/2 left-1/3  top-1/4">
          <h1 className='font-bold text-6xl text-white'>
            Choose Your Favourite <br />
            And Buy From <br />
            On Here
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-1/3 w-2/5  top-2/4">
          <p className='text-xl text-white '>
          Buy or sell a second hand bike online is easily! Thousands of used bikes for sale from all major Bangladesh cities and towns.We delivery this bike with 7 days.
          </p>
        </div>
    
        <div className="absolute flex justify-end transform -translate-y-1/2 left-1/4 w-2/5  top-3/4">
          <button className='btn btn-secondary mr-5'>Explore ❯</button>
         
        </div>
    
        <div className="absolute flex justify-end transform -translate-y-1/2 left-0 right-1/2 bottom-5">
          <a href={`#slide${prev}`} className="btn btn-circle p-2 mr-5"> prev </a> 
          <a href={`#slide${next}`} className="btn btn-circle p-2">Next</a>
        </div>
      </div> 
    );
};

export default BannerPart;