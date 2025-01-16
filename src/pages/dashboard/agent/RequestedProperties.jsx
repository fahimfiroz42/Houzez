import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

const RequestedProperties = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      buyerEmail: "buyer@example.com",
      buyerName: "John Smith",
      offeredPrice: 2750000,
      status: 'pending'
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      location: "Manhattan, NY",
      buyerEmail: "buyer2@example.com",
      buyerName: "Sarah Johnson",
      offeredPrice: 925000,
      status: 'pending'
    }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'accepted' };
      }
      // Auto reject other offers for the same property
      if (request.title === requests.find(r => r.id === id)?.title) {
        return { ...request, status: 'rejected' };
      }
      return request;
    }));
    toast.success('Offer accepted successfully');
  };

  const handleReject = (id) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'rejected' } : request
    ));
    toast.success('Offer rejected');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Requested Properties</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Buyer Information
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Offered Price
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
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{request.title}</p>
                    <p className="text-sm text-gray-500">{request.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{request.buyerName}</p>
                    <p className="text-sm text-gray-500">{request.buyerEmail}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">
                    ${request.offeredPrice.toLocaleString()}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                    ${request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      request.status === 'accepted' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {request.status === 'pending' ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAccept(request.id)}
                        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-500">No actions available</span>
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

export default RequestedProperties;
