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
import Dashboard from "../Layout/Dashboard";
import AddScholarship from "../Pages/Dashboard/AddScholarship/AddScholarship";
import ScholarshipDetails from "../Pages/AllScholarship/ScholarshipDetails/ScholarshipDetails";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import Managescholarships from "../Pages/Dashboard/ManageScholarships/Managescholarships";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";




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
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: '/scholarship-details/:id',
                element: <PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: 'my-profile',
                        element: <MyProfile></MyProfile>
                    },
                    {
                        path: 'addScholarship',
                        element: <AdminRoute><AddScholarship></AddScholarship></AdminRoute>
                    },
                    {
                        path: 'allusers',
                        element: <AdminRoute><AllUser></AllUser></AdminRoute>
                    },
                    {
                        path: 'admin-profile',
                        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
                    },
                    {
                        path: 'manage-scholarships',
                        element: <AdminRoute><Managescholarships></Managescholarships></AdminRoute>
                    }
                ]
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