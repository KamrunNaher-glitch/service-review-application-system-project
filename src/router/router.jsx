import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout> ,
      errorElement:<h2>Route not Found</h2>,
      
      children:[
        {
          path:'/',
          element:<Home></Home> 
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'signIn',
          element:<SignIn></SignIn>
        },

      ]
    },
  ]);

export default router;

