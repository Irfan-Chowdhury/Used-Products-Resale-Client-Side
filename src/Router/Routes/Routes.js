import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
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
        ]
    },
    { 
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);

export default router;