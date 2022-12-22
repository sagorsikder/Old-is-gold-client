import React from 'react';

import Modal from '../../Utilities/Modal';

const ProductCard = ({product}) => {
    const {img,name,location,orginalPrice,resalePrice,used,seller} = product;

   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='max-h-[200px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Resale Price : {resalePrice}</p>
    <p>Orginal Price : {orginalPrice}</p>
    <p>Used : {used} years</p>
    <p>Seller : {seller}</p>
    
    <p>Location : {location}</p>
    <div className="card-actions justify-end">
      
     <label htmlFor="booking-modal" className="btn">Book Now</label>
   
    </div>
    <Modal product={product}></Modal>
  </div>
</div>
    );
};

export default ProductCard;