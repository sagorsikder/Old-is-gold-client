import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
         
            <li><Link to='/dashboard/myorder'>My Orders</Link></li>

            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
            <li><Link to='/dashboard/myproduct'>My Product</Link></li>
            <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>

            <li><Link to='/dashboard/myseller'>All Sellers</Link></li>
            <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;