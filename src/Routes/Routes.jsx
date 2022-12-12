import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import Appointment from "../Pages/Appointment/Appointment/Appointment"
import AddDoctors from "../Pages/Dashboard/AddDoctors/AddDoctors"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers"
import Dashboard from "../Pages/Dashboard/Dashboard"
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp"
import AdminRoute from "./AdminRoute"
import PrivateRoute from "./PrivateRoute";
import Payment from '../Pages/Dashboard/Payment/Payment'
import DisplayError from "../Pages/Shared/DisplayError/DisplayError"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-sandy-sigma.vercel.app/bookings/${params.id}`)
            },
        ]
    },
])