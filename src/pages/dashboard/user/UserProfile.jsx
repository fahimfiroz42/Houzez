import { User, Mail, Phone, Calendar } from 'lucide-react';

import { useContext } from 'react';
import { AuthContext } from '../../../AuthPovider/AuthPovider';
import useRole from '../../../hooks/useRole';

const UserProfile = () => {
  const [role]=useRole()
  const { user } = useContext(AuthContext);


  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 h-32"></div>
        <div className="px-6 py-8">
          <div className="flex flex-col items-center -mt-20 mb-8">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 bg-gray-200 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            )}
            <h1 className="text-2xl font-bold">{user?.displayName || 'User'}</h1>
            <span className="text-gray-500">{role}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+1 234 567 890</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium">January 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Properties Viewed</h3>
          <p className="text-3xl font-bold text-blue-500">24</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Wishlist Items</h3>
          <p className="text-3xl font-bold text-blue-500">8</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Properties Bought</h3>
          <p className="text-3xl font-bold text-blue-500">2</p>
        </div>
      </div> */}
    </div>
  );
};

export default UserProfile;