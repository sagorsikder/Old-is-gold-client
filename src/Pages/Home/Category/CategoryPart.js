import React from 'react';

const CategoryPart = ({cat}) => {
   const {category,categoryImg,details}=cat;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={categoryImg} alt="Shoes" className="h-[300px]  rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">see more</button>
          </div>
        </div>
      </div>
    );
};

export default CategoryPart;