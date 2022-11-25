import React from 'react';

const ProductCard = ({product}) => {
    const {img,name,location,orginalPrice,resalePrice,used,seller} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Resale Price : {resalePrice}</p>
    <p>Orginal Price : {orginalPrice}</p>
    <p>Used : {used} years</p>
    <p>Seller : {seller}</p>
    
    <p>Location : {location}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;