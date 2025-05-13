import { Link, Outlet, useLocation } from 'react-router-dom';

import { Globe, Home, House, Menu, Star, TrendingUpDown, User, UserPen, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthPovider/AuthPovider';
import useRole from '../hooks/useRole';
import logo from '../../public/agreement.png'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [role,isLoading]=useRole()
 


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed  inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
        >
          <div className="min-h-screen flex flex-col  ">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold">Dashboard</h2>

              <img src={logo} alt="" className='w-10 h-10' />
            </div>
            <nav className="flex-1 p-4 space-y-2">

           

              {role === 'user' && (
                <>
                  <Link
                    to="/dashboard/user/profile"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/user/profile'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/dashboard/user/wishlist"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/user/wishlist'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Wishlist
                  </Link>
                  <Link
                    to="/dashboard/user/property-bought"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/user/property-bought'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Property Bought
                  </Link>
                  <Link
                    to="/dashboard/user/reviews"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/user/reviews'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    My Reviews
                  </Link>
                </>
              )}

              {role === 'agent' && (
                <>
                  <Link
                    to="/dashboard/agent/profile"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/agent/profile'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Agent Profile
                  </Link>
                  <Link
                    to="/dashboard/agent/add-property"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/agent/add-property'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Add Property
                  </Link>
                  <Link
                    to="/dashboard/agent/my-properties"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/agent/my-properties'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    My Added Properties
                  </Link>
                  <Link
                    to="/dashboard/agent/sold-properties"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/agent/sold-properties'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    My Sold Properties
                  </Link>
                  <Link
                    to="/dashboard/agent/requested-properties"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/agent/requested-properties'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Requested Properties
                  </Link>
                </>
              )}

              {role === 'admin' && (
                <>
                  <Link
                    to="/dashboard/admin/profile"
                    className={`flex p-2 rounded ${
                      location.pathname === '/dashboard/admin/profile'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                   <User className={`w-5 h-5 mr-2 text-blue-500 ${
                      location.pathname === '/dashboard/admin/manage-properties'
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}  />


                    Admin Profile
                  </Link>
                  <Link
                    to="/dashboard/admin/manage-properties"
                    className={`flex items-center p-2 rounded ${
                      location.pathname === '/dashboard/admin/manage-properties'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                   <House className={`w-5 h-5 mr-2 text-blue-500 ${
                      location.pathname === '/dashboard/admin/manage-properties'
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}  />


                    Manage Properties
                  </Link>
                  <Link
                    to="/dashboard/admin/manage-users"
                    className={`flex items-center p-2 rounded ${
                      location.pathname === '/dashboard/admin/manage-users'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <UserPen className={`w-5 h-5 mr-2 text-blue-500 ${
                      location.pathname === '/dashboard/admin/manage-users'
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}  />

                    Manage Users
                  </Link>
                  <Link
                    to="/dashboard/admin/manage-reviews"
                    className={`flex items-center p-2 rounded ${
                      location.pathname === '/dashboard/admin/manage-reviews'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Star className={`w-5 h-5 mr-2 text-blue-500 ${
                      location.pathname === '/dashboard/admin/manage-reviews'
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}  />
                    


                    Manage Reviews
                  </Link>
                  <Link
                    to="/dashboard/admin/advertise-property"
                    className={`flex   p-2 rounded ${
                      location.pathname === '/dashboard/admin/advertise-property'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                  
                  <Globe className={`w-5 h-5 mr-2 text-blue-500 ${
                      location.pathname === '/dashboard/admin/advertise-property'
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}  />



                    Advertise Property
                  </Link>
                  <Link
                    to="/dashboard/admin/overview"
                    className={`flex items-center p-2 rounded ${
                      location.pathname === '/dashboard/admin/overview'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <TrendingUpDown className={`w-5 h-5 mr-2 text-blue-500 ${
                      location.pathname === '/dashboard/admin/overview'
                        ? 'text-white'
                        : 'hover:bg-gray-100'
                    }`}  />
                    Overview
                  </Link>
                </>
              )}
                  
                  


                  <Link
                    to="/"
                    className={`flex items-center  p-2 rounded hover:bg-gray-100 `}
                  >
                    <Home className='w-5 h-5 mr-2 text-blue-500'/>
                    Home
                  </Link>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1   ">
          <header className="bg-white shadow-sm lg:hidden ">
            <div className="px-4 py-2 flex items-center justify-end ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 a"
              >
                {isOpen ? <X size={24} className=""  /> : <Menu size={24} />}
              </button>
            </div>
          </header>
          <main className="p-6 ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;