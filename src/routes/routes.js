import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../layouts/DashboardMain";
import Main from "../layouts/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProduct from "../Pages/MyProduct/MyProduct";
import MySellers from "../Pages/MySellers/MySellers";
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
        element:<PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
        children:[
       
       {

        path:'/dashboard/myorder',
        element:<MyOrders></MyOrders>
        },
        {
          path:'/dashboard/addproduct',
          element:<AddProduct></AddProduct>
        },
        {
          path:'/dashboard/myproduct',
          element:<MyProduct></MyProduct>
        },
        {
          path:'/dashboard/myseller',
          element:<MySellers></MySellers>
        },
        {
          path:'/dashboard/mybuyers',
          element:<MyBuyers></MyBuyers>
        },
        {
          path:'/dashboard/allbuyers',
          element:<AllBuyers></AllBuyers>
        }
      ]


      }  
])

export default router;