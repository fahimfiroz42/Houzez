import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        }
      ]
    },
  ]);

export default Routes;