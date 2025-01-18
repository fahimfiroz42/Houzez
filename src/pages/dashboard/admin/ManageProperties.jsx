import { useState } from 'react';
import { Check, X, Shield } from 'lucide-react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../components/shared/Loading';

const ManageProperties = () => {
 
  const {data:properties,isLoading,refetch}=useQuery({
    queryKey:['properties'],
    queryFn: async () => {
        const {data}=await axios.get(`http://localhost:9000/properties`)
        return data
  }
  
}
)

if(isLoading){
  return <Loading/>
}




  const handleVerify = async (id) => {

    const {data}=await axios.patch(`http://localhost:9000/properties/${id}`,{
        verificationStatus: "verified",
      })
    if(data.modifiedCount>0){
        toast.success('Property verified successfully');
    }
     refetch()
   
  };

  const handleReject =async (id) => {
    const {data}=await axios.patch(`http://localhost:9000/properties/${id}`,{
        verificationStatus: "rejected",
      })
    if(data.modifiedCount>0){
        toast.success('Property rejected');
    }
     refetch()
   
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
            {properties &&  properties.map((property) => (
              <tr key={property._id}>
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
                      property.verificationStatus=== 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : property.verificationStatus=== 'verified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    <Shield className="w-3 h-3 mr-1" />
                    {property.verificationStatus.charAt(0).toUpperCase() + property.verificationStatus.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {property.verificationStatus === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleVerify(property._id)}
                        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleReject(property._id)}
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
