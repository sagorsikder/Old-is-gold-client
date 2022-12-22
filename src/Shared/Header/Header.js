import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const menuItem =<>
    
    <li className='font-semibold'><Link to="/">Home</Link></li>
           
                <li className='font-semibold'><Link to="/blog">Blog</Link></li>

                {
                   user?.uid ?
                        <button className='btn-logout  font-semibold' onClick={logOut}>Log out</button>
                        :
                         <>
                           <li className='font-semibold'> <Link to="/login">Login</Link></li>
                            <li className='font-semibold'> <Link to="/signup">Sign up</Link></li>
                        </>
                 }
    
    </>
    return (
      
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
           
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItem}
            </ul>
          </div>
          <a href='/' className="btn btn-ghost normal-case text-xl">Old Is Gold</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {menuItem}
          </ul>
        </div>
      
        
        <div className="navbar-end">
         {
          user? <Link to='/dashboard' className="btn ">Dashboard</Link>:''
         }
        </div>

        <label htmlFor="my-drawer-2"  tabIndex={2} className="btn btn-ghost lg:hidden">
           
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
         </label>
      </div>
     
    );
};

export default Header;