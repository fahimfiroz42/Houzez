import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import PropertyDetails from '../pages/PropertyDetails';
import DashboardLayout from '../layouts/DashboardLayout';
import UserProfile from '../pages/dashboard/user/UserProfile';
import Wishlist from '../pages/dashboard/user/Wishlist';
import PropertyBought from '../pages/dashboard/user/PropertyBought';
import MyReviews from '../pages/dashboard/user/MyReviews';
import AgentProfile from '../pages/dashboard/agent/AgentProfile';
import AddProperty from '../pages/dashboard/agent/AddProperty';
import MyAddedProperties from '../pages/dashboard/agent/MyAddedProperties';
import MySoldProperties from '../pages/dashboard/agent/MySoldProperties';
import RequestedProperties from '../pages/dashboard/agent/RequestedProperties';
import AdminProfile from '../pages/dashboard/admin/AdminProfile';
import ManageProperties from '../pages/dashboard/admin/ManageProperties';
import ManageUsers from '../pages/dashboard/admin/ManageUsers';
import ManageReviews from '../pages/dashboard/admin/ManageReviews';
import AdvertiseProperty from '../pages/dashboard/admin/AdvertiseProperty';
import AllProperties from '../pages/Allproperties';
import MakeOffer from '../pages/dashboard/user/MakeOffer';

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
        },
        {
            path:'/all-properties',
            element:<AllProperties/>
        }
      ]
    },

    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
           // User routes
      {
        path: 'user/profile',
        element: <UserProfile />,
      },
      {
        path: 'user/wishlist',
        element: <Wishlist />,
      },
      {
        path:'user/make-offer/:id',
        element:<MakeOffer/>

      },
      {
        path: 'user/property-bought',
        element: <PropertyBought />,
      },
      {
        path: 'user/reviews',
        element: <MyReviews />,
      },
      // Agent routes
      {
        path: 'agent/profile',
        element: <AgentProfile />,
      },
      {
        path: 'agent/add-property',
        element: <AddProperty />,
      },
      {
        path: 'agent/my-properties',
        element: <MyAddedProperties />,
      },
      {
        path: 'agent/sold-properties',
        element: <MySoldProperties />,
      },
      {
        path: 'agent/requested-properties',
        element: <RequestedProperties />,
      },
      // Admin routes
      {
        path: 'admin/profile',
        element: <AdminProfile />,
      },
      {
        path: 'admin/manage-properties',
        element: <ManageProperties />,
      },
      {
        path: 'admin/manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'admin/manage-reviews',
        element: <ManageReviews />,
      },
      {
        path: 'admin/advertise-property',
        element: <AdvertiseProperty />,
      }
        ]
    }
  ]);

export default Routes;