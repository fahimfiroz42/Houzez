import { useState } from 'react';
import { MapPin, DollarSign, Shield, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../components/shared/Loading';

const AllProperties = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const [sortOrder, setSortOrder] = useState('asc');

  

  const {data:properties,isLoading,refetch}=useQuery({
    queryKey:['properties',searchLocation,sortOrder],
    queryFn: async () => {
        const {data}=await axios.get(`http://localhost:9000/properties?verify=verified&search=${searchLocation}&sortByPrice=${sortOrder}`)
        return data
  }
  
}
)

// if(isLoading){
//     return <Loading/>
// }


const handleSearch = (e) => {
     if(e.target.value === ''){ 
      setSearchLocation('') 
      return refetch()
      
    }
     setSearchLocation(e.target.value); 
     return refetch()
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); 
    refetch()
  };




  const filteredProperties = properties
   
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
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="text-gray-400" />
              <select
                value={sortOrder}
                onChange={handleSortChange}
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
          {filteredProperties &&  filteredProperties.map((property) => (
            <div key={property._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={property.photoURL} 
                alt={property.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  {property.verified && (
                    <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500" />
                    <p className='text-green-700 bg-green-100 text-sm rounded-full px-2 '>Verified</p>
                    </div>
                    
                  )}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>{property?.priceRange?.min?.toLocaleString()} - {property?.priceRange?.max?.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={property.agentImage} 
                      alt={property.agentName} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{property.agentName}</span>
                  </div>
                  <Link
                    to={`/property/${property._id}`}
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