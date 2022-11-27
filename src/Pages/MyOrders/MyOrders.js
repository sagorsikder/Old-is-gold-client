import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const MyOrders = () => {
    
    const {user} = useContext(AuthContext)
    const [orders,setOrders] = useState([])

    fetch(`http://localhost:5000/order?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setOrders(data))
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-7'>My Orders</h1>
        <div className="overflow-x-auto">
<table className="table w-full">

<thead>
 <tr>
   <th></th>
   <th>Product</th>
   <th>Price</th>
   <th>Product image</th>
   <th></th>
   
 </tr>
</thead>
<tbody>

{

orders.map((order,i)=> <tr>
   <th>{i+1}</th>
   <td>{order.product}</td>
   <td>{order.price}</td>
   <td><img className='w-[40px] h-[40px]' src={order.img} alt="" /></td>
   <td><button className='btn  btn-primary '>Pay</button></td>
   
 </tr>)
}
</tbody>
</table>
</div>
   </div>
    );
};

export default MyOrders;