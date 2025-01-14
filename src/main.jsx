import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'

import Routes from './routes/Routes.jsx';
import AuthContextProvider from './AuthPovider/AuthPovider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
   <RouterProvider router={Routes} />
   </AuthContextProvider>
  </StrictMode>,
)
