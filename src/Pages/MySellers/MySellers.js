import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MySellers = () => {
  
    const loadUsers = useLoaderData()
    const users = loadUsers.filter(user=>user?.role !== 'admin' && user?.role !== 'Buyer')
    
    const handleDelete =(email)=>{
      


          fetch(`https://old-is-gold-server.vercel.app/seller?email=${email}`)
         
   
       
        }
    

     
      
    
    return (
        <div>
            <h1 className='text-3xl font-semibold my-7'>All Seller</h1>
              <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Remove </th>
      </tr>
    </thead>
    <tbody>
  
   {

   users && users.map((user,i)=> <tr>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
       
        <td><button onClick={()=>handleDelete(user.email)} className='btn btn-warning'>delete</button></td>
      </tr>)
   }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MySellers;