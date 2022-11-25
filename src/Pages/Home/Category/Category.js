import {React,useEffect, useState} from 'react';
import CategoryPart from './CategoryPart';

const Category = () => {
    const [category,setCategory]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setCategory(data))
    },[])
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                category.map(cat=><CategoryPart cat={cat}></CategoryPart>)
            }
        </div>
    );
};

export default Category;