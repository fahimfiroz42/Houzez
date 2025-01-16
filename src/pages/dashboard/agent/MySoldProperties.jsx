import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

const MySoldProperties = () => {
  const [soldProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      buyerEmail: "buyer@example.com",
      buyerName: "John Smith",
      soldPrice: 2750000,
      soldDate: "2024-02-15"
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      location: "Manhattan, NY",
      buyerEmail: "buyer2@example.com",
      buyerName: "Sarah Johnson",
      soldPrice: 925000,
      soldDate: "2024-02-10"
    }
  ]);

  const totalSoldAmount = soldProperties.reduce((total, property) => total + property.soldPrice, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">My Sold Properties</h1>
        <div className="bg-blue-500 text-white rounded-lg p-6">
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 mr-2" />
            <div>
              <p className="text-sm">Total Sales</p>
              <p className="text-2xl font-bold">${totalSoldAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

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
                Sale Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {soldProperties.map((property) => (
              <tr key={property.id}>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{property.title}</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{property.buyerName}</p>
                    <p className="text-sm text-gray-500">{property.buyerEmail}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      ${property.soldPrice.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(property.soldDate).toLocaleDateString()}
                    </p>
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

export default MySoldProperties;
