import { Home, Building2, LayoutDashboard, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthPovider/AuthPovider';

const Navbar = () => {

    const {user,signOutUser}=useContext(AuthContext)

    const handleLogOut = () => {
        signOutUser()
          .then(() => {
            // Handle successful logout
            
          })
          .catch((error) => {
            console.error('Logout error:', error);
          });
      };
    return (
        <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Houszez</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/all-properties"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
            >
              <Building2 className="h-5 w-5" />
              <span>All Properties</span>
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="h-8 w-8 rounded-full"
                    />
                  )}
                  <span className="text-gray-700">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogOut}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-500"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;