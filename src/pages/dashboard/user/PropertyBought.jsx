import { MapPin, DollarSign, CheckCircle, XCircle, CreditCard } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const PropertyBought = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      offeredAmount: 2750000,
      status: 'accepted',
      agent: {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
      }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
      title: "Modern Downtown Apartment",
      location: "Manhattan, NY",
      offeredAmount: 900000,
      status: 'pending',
      agent: {
        name: "Jane Smith",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
      }
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      title: "Seaside Beach House",
      location: "Malibu, CA",
      offeredAmount: 3300000,
      status: 'bought',
      agent: {
        name: "Mike Johnson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
      },
      transactionId: "TXN123456789"
    }
  ]);

  const handlePayment = (propertyId) => {
    // Implement payment logic
    toast.success('Redirecting to payment...');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center text-yellow-500">
            <XCircle className="w-4 h-4 mr-1" />
            Pending
          </span>
        );
      case 'accepted':
        return (
          <span className="flex items-center text-green-500">
            <CheckCircle className="w-4 h-4 mr-1" />
            Accepted
          </span>
        );
      case 'bought':
        return (
          <span className="flex items-center text-blue-500">
            <CheckCircle className="w-4 h-4 mr-1" />
            Bought
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Property Bought</h1>

      <div className="grid grid-cols-1 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img
                src={property.image}
                alt={property.title}
                className="w-full md:w-64 h-48 object-cover"
              />
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  {getStatusBadge(property.status)}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>Offered Amount: ${property.offeredAmount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{property.agent.name}</span>
                  </div>
                  {property.status === 'accepted' && (
                    <button
                      onClick={() => handlePayment(property.id)}
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now
                    </button>
                  )}
                  {property.status === 'bought' && (
                    <div className="text-sm text-gray-600">
                      Transaction ID: {property.transactionId}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyBought;
