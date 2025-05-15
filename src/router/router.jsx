import { FaMartiniGlassEmpty } from "react-icons/fa6";
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";

import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import ServiceApply from "../pages/ServiceApply/ServiceApply.jsx";
import MyApplications from "../pages/MyApplications/MyApplications.jsx";
import AddService from "../pages/AddService/AddService.jsx";
import MyServices from "../pages/MyServices/MyServices.jsx";
import ViewApplications from "../pages/ViewApplications/ViewApplications.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://service-review-application-system-project-server.vercel.app/services/${params.id}`)
      },
      {
        path: '/serviceapply/:id',
        element: <PrivateRoute><ServiceApply></ServiceApply></PrivateRoute>
      },
     
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/myservices',
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: '/viewApplications/:service_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader:({params}) => fetch(`https://service-review-application-system-project-server.vercel.app/service-application/services/${params.service_id}`)
      },
     
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

export default router;