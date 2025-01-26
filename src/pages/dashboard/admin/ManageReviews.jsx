
import { Star, Trash2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import Loading from '../../../components/shared/Loading';

const ManageReviews = () => {
 


 
  const {data:reviews,refetch,isLoading}=useQuery({
    queryKey:['reviews'],
    queryFn: async () => {
        const {data}=await axios.get(`http://localhost:9000/reviews`)
        return data
  }
  
  }
  )


  if(isLoading){
    return <Loading/>
  }
   

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
      
        const { data } = await axios.delete(`http://localhost:9000/reviews/${id}`);
  
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your review has been deleted.",
            icon: "success"
          });
     
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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews && reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <img
                  src={review.userImage}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.userName}</h3>
                  <p className="text-sm text-gray-500">{review.userEmail}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(review._id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-2">
              <p className="text-sm font-medium text-gray-500">
                Property: {review.propertyTitle}
              </p>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < review.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">
                {format(new Date(review.date), "MMM dd, yyyy")}
              </span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageReviews;
