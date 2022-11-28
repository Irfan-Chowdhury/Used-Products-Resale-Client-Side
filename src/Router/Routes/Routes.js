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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerboardLayout from "../../Layout/BuyerboardLayout";
import BuyerDashboard from "../../Pages/BuyerDashboard/BuyerDashboard";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import MyOrders from "../../Pages/BuyerDashboard/MyOrders/MyOrders";
import MyWishlist from "../../Pages/BuyerDashboard/MyWishlist/MyWishlist";
import Checkout from "../../Pages/BuyerDashboard/Checkout/Checkout";

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
                element: <PrivateRoute><CategoryWiseProducts></CategoryWiseProducts></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/add-product',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path:'/my-products',
                element:<PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<AdminRoute><Dashboard></Dashboard></AdminRoute>
            },
            {
                path:'/dashboard/all-sellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/all-buyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
        ]
    },
    {
        path: '/buyer-dashboard',
        element: <PrivateRoute><BuyerboardLayout></BuyerboardLayout></PrivateRoute>,
        children:[
            {
                path:'/buyer-dashboard',
                element:<BuyerRoute><BuyerDashboard></BuyerDashboard></BuyerRoute>
            },
            {
                path:'/buyer-dashboard/my-orders',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path:'/buyer-dashboard/my-wishlist',
                element:<BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },
            {
                path:'/buyer-dashboard/orders/checkout/:id',
                element:<BuyerRoute><Checkout></Checkout></BuyerRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/checkout/${params.id}`)
            },
        ]
    },
    { 
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);

export default router;