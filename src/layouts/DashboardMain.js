import React, { useContext, useState } from 'react';
import { Outlet,Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import Header from '../Shared/Header/Header';

const DashboardMain = () => {

    const [currentUser,setCurrentUser] = useState(null)
    
    const {user} = useContext(AuthContext)
    fetch(`http://localhost:5000/user?email=${user.email}`)
    .then(res => res.json())
    .then(data =>setCurrentUser(data))
    return (
        <div>
            <Header></Header>
           



            <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        <div className='drawer-content'>
             <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
         
         {

            currentUser?.role==='admin'?<> <li><Link to='/dashboard/myseller'>All Sellers</Link></li>
            <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li></>:<> <li><Link to='/dashboard/myorder'>My Orders</Link></li>
            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li><Link to='/dashboard/myproduct'>My Product</Link></li>
            <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li></>
                 
         }
          </ul>
        
        </div>
      </div>


            
        </div>
    );
};

export default DashboardMain;