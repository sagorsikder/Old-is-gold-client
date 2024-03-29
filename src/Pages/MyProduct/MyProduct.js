import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import ProductPart from './ProductPart';

const MyProduct = () => {
    const [products,setProducts] = useState(null)
    const [completed,setComplete] = useState(null)

    const {user} = useContext(AuthContext)

    useEffect(()=>{

        fetch(`https://old-is-gold-server.vercel.app/myproduct?email=${user.email}`)
  
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
           
        })
    },[completed,user?.email])
  

    const handleDelete=(id)=>{

  
        fetch(` https://old-is-gold-server.vercel.app/delete1?id=${id}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=> res.json())
        .then(data=>{
            setComplete(data)
            alert('Advertise successfully')
        })
    
    }
    
    

    return (
        <div>
              <h1 className='text-center text-3xl font-semibold my-7'>My Products</h1>
             {
                products? <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                {
                    products.map(prod=><ProductPart key={prod._id} handleDelete={handleDelete} product={prod}></ProductPart>)
                }
              </div>:<h1 className='text-5xl  font-bold my-10'>You Have No Any Product !!</h1>
             }
        </div>
    );
};

export default MyProduct;