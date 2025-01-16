import { useState } from 'react';
import { Shield, UserPlus, AlertTriangle, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: 'user',
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: 'agent',
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: 'agent',
      isFraud: true,
    },
  ]);

  const handleMakeAdmin = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, role: 'admin' } : user
      )
    );
    toast.success('User promoted to admin');
  };

  const handleMakeAgent = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, role: 'agent' } : user
      )
    );
    toast.success('User promoted to agent');
  };

  const handleMarkAsFraud = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isFraud: true } : user
      )
    );
    toast.success('User marked as fraud');
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.success('User deleted successfully');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                      user.role === 'admin'
                        ? 'bg-purple-100 text-purple-800'
                        : user.role === 'agent'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.isFraud ? (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Fraud
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      <Shield className="w-3 h-3 mr-1" />
                      Active
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {!user.isFraud && user.role !== 'admin' && (
                      <button
                        onClick={() => handleMakeAdmin(user.id)}
                        className="bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
                        title="Make Admin"
                      >
                        <Shield className="w-4 h-4" />
                      </button>
                    )}
                    {!user.isFraud && user.role === 'user' && (
                      <button
                        onClick={() => handleMakeAgent(user.id)}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        title="Make Agent"
                      >
                        <UserPlus className="w-4 h-4" />
                      </button>
                    )}
                    {user.role === 'agent' && !user.isFraud && (
                      <button
                        onClick={() => handleMarkAsFraud(user.id)}
                        className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
                        title="Mark as Fraud"
                      >
                        <AlertTriangle className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                      title="Delete User"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
