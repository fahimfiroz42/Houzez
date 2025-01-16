import { useState } from 'react';
import { Check, X, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

const ManageProperties = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      agentName: "John Doe",
      agentEmail: "john@example.com",
      priceRange: {
        min: 2500000,
        max: 3000000,
      },
      status: 'pending',
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      location: "Manhattan, NY",
      agentName: "Jane Smith",
      agentEmail: "jane@example.com",
      priceRange: {
        min: 850000,
        max: 950000,
      },
      status: 'pending',
    },
  ]);

  const handleVerify = (id) => {
    setProperties(
      properties.map((property) =>
        property.id === id ? { ...property, status: 'verified' } : property
      )
    );
    toast.success('Property verified successfully');
  };

  const handleReject = (id) => {
    setProperties(
      properties.map((property) =>
        property.id === id ? { ...property, status: 'rejected' } : property
      )
    );
    toast.success('Property rejected');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Properties</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Agent Information
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price Range
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
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{property.title}</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{property.agentName}</p>
                    <p className="text-sm text-gray-500">{property.agentEmail}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">
                    ${property.priceRange.min.toLocaleString()} - ${property.priceRange.max.toLocaleString()}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                      property.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : property.status === 'verified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    <Shield className="w-3 h-3 mr-1" />
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {property.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleVerify(property.id)}
                        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleReject(property.id)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
