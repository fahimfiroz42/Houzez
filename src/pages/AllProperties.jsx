import { useState } from 'react';
import { MapPin, DollarSign, Shield, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProperties = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      price: 2500000,
      verified: true,
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
      price: 850000,
      verified: true,
      agent: {
        name: "Jane Smith",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
      }
    },
    // Add more properties as needed
  ];

  const filteredProperties = properties
    .filter(property => 
      property.location.toLowerCase().includes(searchLocation.toLowerCase())
    )
    .sort((a, b) => 
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All Properties</h1>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="text-gray-400" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
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
                  <span>{property.price.toLocaleString()}</span>
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
                  <Link
                    to={`/property/${property.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;