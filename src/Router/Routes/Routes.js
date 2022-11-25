import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
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
            }
        ]
    },
    { 
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);

export default router;