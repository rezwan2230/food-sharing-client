import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Main from './layout/Main';
import AvailableFood from './pages/AvailableFood/AvailableFood';
import AddFood from './pages/AddFood/AddFood';
import ManageMyFood from './pages/ManageMyFood/ManageMyFood';
import MyFoodRequest from './pages/MyFoodRequest/MyFoodRequest';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'availablefood',
        element: <AvailableFood></AvailableFood>,
        loader : ()=>fetch('http://localhost:5000/foods')
      },
      {
        path: 'addfood',
        element: <AddFood></AddFood>
      },
      {
        path: 'managemyfood',
        element: <ManageMyFood></ManageMyFood>
      },
      {
        path: 'myfoodrequest',
        element: <MyFoodRequest></MyFoodRequest>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
