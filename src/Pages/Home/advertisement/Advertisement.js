import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import ProductPart from './ProductPart';


const Advertisement = () => {
    const [products,setProducts] = useState(null)
    const [completed, setComplete] = useState(null)

    const {user} = useContext(AuthContext)

    useEffect(()=>{

        fetch(`https://old-is-gold-server.vercel.app/advertisement?email=${user?.email}`)
  
        .then(async(res)=>await res.json())
        .then(data=>{
            setProducts(data)
        })
    },[user?.email,completed])

    const handleDelete=(id)=>{

  
        fetch(` https://old-is-gold-server.vercel.app/delete2?id=${id}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=> res.json())
        .then(data=>{
            setComplete(data)
            alert('hide successfully')
        })
    
    }
   
    

    return (
        <div>
              <h1 className='text-blue-600 text-center font-semibold text-5xl  my-7'>Advertisement</h1>
             {
                products? <div className='w-3/4 mx-auto grid lg:grid-cols-2 sm:grid-cols-1'>
                {
                    products.map(prod=><ProductPart handleDelete={handleDelete} key={prod._id}  product={prod}></ProductPart>)
                }
              </div>:<h1 className='text-5xl text-center font-bold my-10'>You are not advertise any product!!</h1>
             }
        </div>
    );
};

export default Advertisement;