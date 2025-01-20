import { Link, Outlet, useLocation } from 'react-router-dom';

import { Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthPovider/AuthPovider';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const role = 'agent';

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
        >
          <div className="min-h-screen flex flex-col ">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">Dashboard</h2>
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
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/admin/profile'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Admin Profile
                  </Link>
                  <Link
                    to="/dashboard/admin/manage-properties"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/admin/manage-properties'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Manage Properties
                  </Link>
                  <Link
                    to="/dashboard/admin/manage-users"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/admin/manage-users'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Manage Users
                  </Link>
                  <Link
                    to="/dashboard/admin/manage-reviews"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/admin/manage-reviews'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Manage Reviews
                  </Link>
                  <Link
                    to="/dashboard/admin/advertise-property"
                    className={`block p-2 rounded ${
                      location.pathname === '/dashboard/admin/advertise-property'
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    Advertise Property
                  </Link>
                </>
              )}

                  <Link
                    to="/"
                    className={`block p-2 rounded hover:bg-gray-100 `}
                  >
                    Home
                  </Link>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 ">
          <header className="bg-white shadow-sm lg:hidden">
            <div className="px-4 py-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
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