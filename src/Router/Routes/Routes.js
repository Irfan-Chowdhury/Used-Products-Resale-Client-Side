import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import NotFound404 from "../../Pages/Shared/NotFound404/NotFound404";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
        ]
    },
    { 
        path: '*', 
        element: <NotFound404></NotFound404>
    }
]);

export default router;