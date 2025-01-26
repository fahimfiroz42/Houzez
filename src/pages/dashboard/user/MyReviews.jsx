import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Star, Trash2 } from 'lucide-react';
import { useContext, useState } from 'react';

import { AuthContext } from '../../../AuthPovider/AuthPovider';
import { format } from 'date-fns';
import Swal from 'sweetalert2';

const MyReviews = () => {
 const {user}=useContext(AuthContext)

  const {data:reviews,refetch}=useQuery({
    queryKey:['reviews'],
    queryFn: async () => {
        const {data}=await axios.get(`https://houzez-server.vercel.app/allreviews/${user?.email}`)
        return data
  }
  
  }
  )
  





  const handleDelete = async (id) => {
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
        // Wait for the delete request to complete
        const { data } = await axios.delete(`https://houzez-server.vercel.app/reviews/${id}`);
  
        // Check if the deletion was successful
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your review has been deleted.",
            icon: "success"
          });
          // Refetch the data to reflect changes
          refetch();
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to delete the review.",
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
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>

      {reviews && reviews.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500">You haven't written any reviews yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {reviews && reviews.map((review) => (
            <div key={review._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{review.propertyTitle}</h3>
                  <p className="text-sm text-gray-500">Agent: {review.agentName}</p>
                </div>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {format(new Date(review.date), 'MMM d, yyyy')}
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
