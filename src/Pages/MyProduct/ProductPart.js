import React from 'react';

const ProductPart = ({product}) => {

  const {name,img,price,location,description,condition} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <p>{location}</p>
          <p>{condition}</p>
          <div className="card-actions justify-end">
           
            <button className="btn btn-primary">Advertise</button>
            
          </div>
        </div>
      </div>
    );
};

export default ProductPart;