/* eslint-disable react/prop-types */
import {  MapPin, DollarSign, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvertisementCard = ({property}) => {
    return (
        <div key={property._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={property.photoURL} alt={property.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            {property.verified && (
              <Shield className="w-5 h-5 text-green-500" />
            )}
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>{property.priceRange?.min} -{property.priceRange?.max} </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={property.agentImage} alt={property.agentName} className="w-8 h-8 rounded-full mr-2" />
              <span className="text-sm text-gray-600">{property.agentName}</span>
            </div>
            <Link
              to={`/property/${property._id}`}
              className="text-blue-500 hover:text-blue-600 text-sm font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AdvertisementCard;