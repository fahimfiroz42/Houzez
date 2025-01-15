import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import PropertyDetails from '../pages/PropertyDetails';
import DashboardLayout from '../layouts/DashboardLayout';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/property/:id',
            element:<PropertyDetails/>
        }
      ]
    },

    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                
            }
        ]
    }
  ]);

export default Routes;