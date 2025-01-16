import { useState } from 'react';
import { Star, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ManageReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      propertyTitle: "Luxury Villa with Pool",
      reviewerName: "Emily Brown",
      reviewerEmail: "emily@example.com",
      reviewerImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      rating: 5,
      comment:
        "Amazing property with excellent amenities. The agent was very professional and helpful throughout the process.",
      date: "2024-02-15",
    },
    {
      id: 2,
      propertyTitle: "Modern Downtown Apartment",
      reviewerName: "Michael Clark",
      reviewerEmail: "michael@example.com",
      reviewerImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      rating: 4,
      comment:
        "Great location and modern design. The process was smooth but took a bit longer than expected.",
      date: "2024-02-10",
    },
  ]);

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
    toast.success("Review deleted successfully");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <img
                  src={review.reviewerImage}
                  alt={review.reviewerName}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.reviewerName}</h3>
                  <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(review.id)}
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
                {new Date(review.date).toLocaleDateString()}
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
