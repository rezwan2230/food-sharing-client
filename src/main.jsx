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
import SingleFoodDetails from './pages/SingleFoodDetails/SingleFoodDetails';
import UpdateFood from './pages/UpdateFood/UpdateFood';
import PrivateRoute from './private/PrivateRoute';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/foods?sortField=quantity&sortOrder=-1&limit=6')
      },
      {
        path: 'availablefood',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: 'addfood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: 'managemyfood',
        element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>
      },
      {
        path: 'myfoodrequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/requestedfood')
      },
      {
        path: 'foods/:id',
        element: <PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: 'updatefoods/:id',
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
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
    <HelmetProvider>
      <div className='bg-[#F7F4F0]'>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <ToastContainer></ToastContainer>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
