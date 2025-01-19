import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllScholarship from "../Pages/AllScholarship/AllScholarship/AllScholarship";
import Auth from "../Pages/Auth/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Apply from "../Pages/Apply/Apply";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'all-scholarship',
                element: <AllScholarship></AllScholarship>
            },
            {
                path: '/apply',
                element: <PrivateRoute>
                    <Apply></Apply>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);