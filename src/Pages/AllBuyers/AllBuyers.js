import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const loadUsers = useLoaderData()
    const users = loadUsers.filter(user=>user?.role !== 'admin')

    return (
        <div>
             <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
  
   {

    users.map((user,i)=> <tr>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>)
   }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;