import React, { useContext } from 'react';
import { MapPin, DollarSign, Shield, Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { AuthContext } from '../../../AuthPovider/AuthPovider';
import Loading from '../../../components/shared/Loading';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyAddedProperties = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure =useAxiosSecure()
 

  const {data:properties,isLoading,refetch}=useQuery({
    queryKey:['properties'],
    queryFn: async () => {
        const {data}=await axiosSecure.get(`/property/${user?.email}`)
        return data
  }
  
}
)

if(isLoading){
    return <Loading/>
}

  const handleDelete =async (id) => {

    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
  
      if (result.isConfirmed) {
      
        const { data } = await axiosSecure.delete(`/properties/${id}`);
  
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your property has been deleted.",
            icon: "success"
          });
     
          refetch();
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to delete the property.",
            icon: "error"
          });
        }
      }
    } catch (error) {
      console.error("Error deleting the review:", error);
      Swal.fire({
        title: "Error",
        text: "An unexpected error occurred.",
        icon: "error"
      });
    }

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
       {
        properties && properties.length> 0 ?

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.photoURL}
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
                  ${property.priceRange.min.toLocaleString()} - ${property.priceRange.max.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-2">
                {property.verificationStatus !== 'rejected' && (
                  <Link
                    to={`/dashboard/agent/update-property/${property._id}`}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Update
                  </Link>
                )}
                <button
                  onClick={() => handleDelete(property._id)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        
        
        
        
        : <p>No properties found</p>
       }
      
    </div>
  );
};

export default MyAddedProperties;
