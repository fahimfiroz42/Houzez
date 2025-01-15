import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { Toaster } from 'react-hot-toast';

import Routes from './routes/Routes.jsx';
import AuthContextProvider from './AuthPovider/AuthPovider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
   <RouterProvider router={Routes} />
   <Toaster position="top-right" />
   </AuthContextProvider>
  </StrictMode>,
)
