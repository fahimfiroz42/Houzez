import { useQuery } from '@tanstack/react-query';
import { MapPin, DollarSign, Shield, Trash2, CreditCard } from 'lucide-react';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/shared/Loading';
import axios from 'axios';
import { AuthContext } from '../../../AuthPovider/AuthPovider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Wishlist = () => {

    const navigate =useNavigate()
    const axiosSecure =useAxiosSecure()

    const {user}=useContext(AuthContext)

  const {data:wishlistItems,isLoading,refetch}=useQuery({
    queryKey:['wishlistItems'],
    queryFn: async () => {
        const {data}=await axiosSecure.get(`/wishlist/${user?.email}`)
        return data
  }
  
}
)

if(isLoading){
    return <Loading/>
}



  const handleRemove =async (id) => {
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
    
        const { data } = await axiosSecure.delete(`/wishlist/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success"
          });
          refetch();
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to delete the item.",
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

  const handleMakeOffer = (id) => {
    // Navigate to offer page or show modal
    toast.success('Redirecting to make an offer...');
    navigate(`/dashboard/user/make-offer/${id}`);
    
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlistItems?.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Browse Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems && wishlistItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.photoURL}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.verified && (
                    <Shield className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>
                    ${item.priceRange.min.toLocaleString()} - ${item.priceRange.max.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.agentImage}
                      alt={item.agentName}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{item.agentName}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleMakeOffer(item._id)}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Make Offer
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;