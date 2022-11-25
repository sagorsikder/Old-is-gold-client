import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Product/Product";
import SignUp from "../Pages/SignUp/SignUp";


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
                element:<Product></Product>
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
      }  
])

export default router;