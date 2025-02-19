import { Home, Building2, LayoutDashboard, LogOut, Menu, Contact, Gem } from 'lucide-react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthPovider/AuthPovider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // Handle successful logout
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold uppercase">Houzez</span>
            </Link>
          </div>

          {/* Desktop Menu */}
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

            <Link
              to="/contact"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
            >
              <Contact className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <Link
              to="/premium-services"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
            >
              <Gem className="h-5 w-5" />
              <span>Services</span>
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

          {/* Mobile Menu Button */}
          <div className="flex  items-center space-x-4">
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
                  <span className="text-gray-700  ">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogOut}
                  className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-500"
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
          

          {/* User Options */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
         
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
              onClick={toggleMobileMenu}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              to="/all-properties"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
              onClick={toggleMobileMenu}
            >
              <Building2 className="h-5 w-5" />
              <span>All Properties</span>
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
                onClick={toggleMobileMenu}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            )}
            {user ? (

              <>

           
              <button
                onClick={() => {
                  handleLogOut();
                  toggleMobileMenu();
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button> 
              
              
              </>
              
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
