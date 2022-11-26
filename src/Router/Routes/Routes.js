import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoryWiseProducts from "../../Pages/CategoryWiseProducts/CategoryWiseProducts";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/Products/AddProduct/AddProduct";
import MyProducts from "../../Pages/Products/MyProducts/MyProducts";
import NotFound404 from "../../Pages/Shared/NotFound404/NotFound404";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/categories/:id',
                element: <CategoryWiseProducts></CategoryWiseProducts>
                // loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
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
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);

export default router;