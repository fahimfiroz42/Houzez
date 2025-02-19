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

import AddProperty from '../pages/dashboard/agent/AddProperty';
import MyAddedProperties from '../pages/dashboard/agent/MyAddedProperties';
import MySoldProperties from '../pages/dashboard/agent/MySoldProperties';
import RequestedProperties from '../pages/dashboard/agent/RequestedProperties';

import ManageProperties from '../pages/dashboard/admin/ManageProperties';
import ManageUsers from '../pages/dashboard/admin/ManageUsers';
import ManageReviews from '../pages/dashboard/admin/ManageReviews';
import AdvertiseProperty from '../pages/dashboard/admin/AdvertiseProperty';
import AllProperties from '../pages/Allproperties';
import MakeOffer from '../pages/dashboard/user/MakeOffer';
import PrivateRoute from './PrivateRoutes';
import AgentRoute from './AgentRoute';
import AdminRoute from './AdminRoute';
import UpdateProperty from '../pages/dashboard/agent/UpdateProperty';
import Contact from '../pages/Contact';
import PremiumServices from '../pages/PremiumServices';
import Overview from '../pages/Overview';

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
         path:'/contact',
         element:<Contact/>

        },
        { 
          path:'/premium-services',
          element:<PremiumServices/>

        },
        
        {
            path:'/property/:id',
            element:<PrivateRoute><PropertyDetails/></PrivateRoute>
        },
        {
            path:'/all-properties',
            element:<PrivateRoute><AllProperties/></PrivateRoute>
        }
      ]
    },

    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/> </PrivateRoute>,
        children:[
           // User routes
      {
        index: true,
        element: <PrivateRoute><Overview/></PrivateRoute>,
      },
      {
        path:'overview',
        element:<PrivateRoute><Overview/></PrivateRoute>,
      },
      {
        path: 'user/profile',
        element: <PrivateRoute><UserProfile /></PrivateRoute>,
      },
      {
        path: 'user/wishlist',
        element:<PrivateRoute> <Wishlist /> </PrivateRoute> ,
      },
      {
        path:'user/make-offer/:id',
        element:<PrivateRoute> <MakeOffer/> </PrivateRoute>

      },
      {
        path: 'user/property-bought',
        element:<PrivateRoute> <PropertyBought /> </PrivateRoute>,
      },
      {
        path: 'user/reviews',
        element:<PrivateRoute> <MyReviews /> </PrivateRoute>,
      },
      // Agent routes
      {
        path: 'agent/profile',
        element:<PrivateRoute> <UserProfile /></PrivateRoute> ,
      },
      {
        path: 'agent/add-property',
        element:<PrivateRoute> <AgentRoute> <AddProperty /> </AgentRoute> </PrivateRoute>   ,
      },
      {
        path: 'agent/my-properties',
        element:<PrivateRoute>  <AgentRoute>  <MyAddedProperties /></AgentRoute> </PrivateRoute> ,
      },
      {
        path: 'agent/sold-properties',
        element: <PrivateRoute>  <AgentRoute> <MySoldProperties /> </AgentRoute> </PrivateRoute>,
      },
      {
        path: 'agent/requested-properties',
        element:<PrivateRoute>  <AgentRoute> <RequestedProperties /></AgentRoute> </PrivateRoute>,
      },
      {
        path: 'agent/update-property/:id',
        element:<PrivateRoute> <AgentRoute> <UpdateProperty /> </AgentRoute> </PrivateRoute>,
      },
      // Admin routes
      {
        path: 'admin/profile',
        element:<PrivateRoute> <UserProfile /> </PrivateRoute> ,
      },
      {
        path: 'admin/manage-properties',
        element:<PrivateRoute>  <AdminRoute> <ManageProperties /> </AdminRoute> </PrivateRoute>,
      },
      {
        path: 'admin/manage-users',
        element:<PrivateRoute>  <AdminRoute> <ManageUsers /></AdminRoute>  </PrivateRoute>,
      },
      {
        path: 'admin/manage-reviews',
        element:<PrivateRoute> <AdminRoute> <ManageReviews /></AdminRoute> </PrivateRoute>,
      },
      {
        path: 'admin/advertise-property',
        element :<PrivateRoute> <AdminRoute> <AdvertiseProperty /> </AdminRoute> </PrivateRoute> ,
      }
        ]
    }
  ]);

export default Routes;