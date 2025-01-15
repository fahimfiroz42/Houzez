import { Star, Trash2 } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

const MyReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      propertyTitle: "Luxury Villa with Pool",
      agentName: "John Doe",
      rating: 5,
      comment: "Amazing property with excellent amenities. The agent was very professional and helpful throughout the process.",
      date: "2024-02-15"
    },
    {
      id: 2,
      propertyTitle: "Modern Downtown Apartment",
      agentName: "Jane Smith",
      rating: 4,
      comment: "Great location and modern design. The process was smooth but took a bit longer than expected.",
      date: "2024-02-10"
    }
  ]);

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
    toast.success('Review deleted successfully');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>

      {reviews.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500">You haven't written any reviews yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{review.propertyTitle}</h3>
                  <p className="text-sm text-gray-500">Agent: {review.agentName}</p>
                </div>
                <button
                  onClick={() => handleDelete(review.id)}
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
                  {new Date(review.date).toLocaleDateString()}
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
