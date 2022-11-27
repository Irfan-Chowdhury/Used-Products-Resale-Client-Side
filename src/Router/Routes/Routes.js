import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryWiseProducts from "../../Pages/CategoryWiseProducts/CategoryWiseProducts";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/Products/AddProduct/AddProduct";
import MyProducts from "../../Pages/Products/MyProducts/MyProducts";
import NotFound404 from "../../Pages/Shared/NotFound404/NotFound404";
import SignUp from "../../Pages/SignUp/SignUp";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/blogs',
                element:<Blog></Blog>,
            },
            {
                path: '/category/:id',
                element: <CategoryWiseProducts></CategoryWiseProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/add-product',
                element:<AddProduct></AddProduct>,
            },
            {
                path:'/my-products',
                element:<MyProducts></MyProducts>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/all-sellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/all-buyers',
                element:<AllBuyers></AllBuyers>
            },
        ]
    },

    { 
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);

export default router;