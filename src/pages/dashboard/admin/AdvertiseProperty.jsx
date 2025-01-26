import { useState } from 'react';
import { Building2, MapPin, DollarSign, Megaphone } from 'lucide-react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../components/shared/Loading';
import { ca } from 'date-fns/locale';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AdvertiseProperty = () => {
  // const [properties, setProperties] = useState([
  //   {
  //     id: 1,
  //     image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
  //     title: "Luxury Villa with Pool",
  //     location: "Beverly Hills, CA",
  //     agentName: "John Doe",
  //     priceRange: {
  //       min: 2500000,
  //       max: 3000000
  //     },
  //     isAdvertised: false
  //   },
  //   {
  //     id: 2,
  //     image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
  //     title: "Modern Downtown Apartment",
  //     location: "Manhattan, NY",
  //     agentName: "Jane Smith",
  //     priceRange: {
  //       min: 850000,
  //       max: 950000
  //     },
  //     isAdvertised: true
  //   }
  // ]);

  const axiosSecure = useAxiosSecure();
  const {data:properties,isLoading,refetch}=useQuery({
    queryKey:['properties'],
    queryFn: async () => {
        const {data}=await axiosSecure.get(`/properties?verify=verified`)
        return data
  }
  
}
)

if(isLoading){
  return <Loading/>
}


  const handleAdvertise =async (id) => {
   
    try{
        const {data}=await axiosSecure.patch(`/properties/${id}/advertise`,{
          isAdvertised: true
        })
        if(data.modifiedCount>0){
          toast.success('Property added to advertisements');
          refetch()
        }
    }
    catch(error){
      console.log(error)
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Advertise Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties &&  properties.map((property) => (
          <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.photoURL}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                {property.isAdvertised && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    <Megaphone className="w-3 h-3 mr-1" />
                    Advertised
                  </span>
                )}
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Building2 className="w-4 h-4 mr-1" />
                <span>Agent: {property.agentName}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <DollarSign className="w-4 h-4 mr-1" />
                <span>
                  ${property.priceRange.min.toLocaleString()} - ${property.priceRange.max.toLocaleString()}
                </span>
              </div>
              {!property.isAdvertised && (
                <button
                  onClick={() => handleAdvertise(property._id)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                >
                  <Megaphone className="w-4 h-4 mr-2" />
                  Advertise Property
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseProperty;
