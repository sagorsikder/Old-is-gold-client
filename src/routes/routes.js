import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import DashboardMain from "../layouts/DashboardMain";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Product/Product";
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
                path:'/product/:id',
                element:<PrivateRoute><Product></Product></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/product?id=${params.id}`)
            },
     
       
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signup',
            element: <SignUp></SignUp>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'/*',
            element:<ErrorPage></ErrorPage>
          }
        ]
      },

      {
        path:'/dashboard',
        element:<DashboardMain></DashboardMain>,
        children:[
          {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        }]


      }  
])

export default router;