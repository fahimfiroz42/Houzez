import React, { useState } from 'react';
import { MapPin, DollarSign, Shield, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyAddedProperties = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      price: {
        min: 2500000,
        max: 3000000
      },
      verified: true,
      verificationStatus: 'verified'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
      title: "Modern Downtown Apartment",
      location: "Manhattan, NY",
      price: {
        min: 850000,
        max: 950000
      },
      verified: false,
      verificationStatus: 'pending'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      title: "Seaside Beach House",
      location: "Malibu, CA",
      price: {
        min: 3200000,
        max: 3500000
      },
      verified: false,
      verificationStatus: 'rejected'
    }
  ]);

  const handleDelete = (id) => {
    setProperties(properties.filter(property => property.id !== id));
    toast.success('Property deleted successfully');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Pending</span>;
      case 'verified':
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Verified</span>;
      case 'rejected':
        return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Added Properties</h1>
        <Link
          to="/dashboard/agent/add-property"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add New Property
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                {getStatusBadge(property.verificationStatus)}
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <DollarSign className="w-4 h-4 mr-1" />
                <span>
                  ${property.price.min.toLocaleString()} - ${property.price.max.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-2">
                {property.verificationStatus !== 'rejected' && (
                  <Link
                    to={`/dashboard/agent/edit-property/${property.id}`}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Update
                  </Link>
                )}
                <button
                  onClick={() => handleDelete(property.id)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedProperties;
