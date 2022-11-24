import { createBrowserRouter } from "react-router-dom";


import Main from "../layouts/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Inventory from "../Pages/Inventory/Inventory";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
       
          {
            path: '/inventory',
            element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
          },
          {
            path:'/about',
            element:<About></About>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signup',
            element: <SignUp></SignUp>
          }
        ]
      }  
])

export default router;