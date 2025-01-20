import { useContext, useState } from 'react';
import { MapPin, DollarSign, Shield, Heart, Star, User } from 'lucide-react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/shared/Loading';
import { AuthContext } from '../AuthPovider/AuthPovider';


const PropertyDetails = () => {
  const { id } = useParams();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const {user}=useContext(AuthContext)

const features=[
          "5 Bedrooms",
          "6 Bathrooms",
          "Swimming Pool",
          "Garden",
          "3 Car Garage",
          "Smart Home System"
        ]

  

  const reviews = [
    {
      id: 1,
      user: {
        name: "Emily Brown",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
      },
      rating: 5,
      comment: "Amazing property! The amenities are top-notch and the location is perfect.",
      date: "2024-02-15"
    },
    // Add more reviews
  ];
 
  const {data:property,isLoading}=useQuery({
    queryKey:['property'],
    queryFn: async () => {
        const {data}=await axios.get(`http://localhost:9000/propertie/${id}`)
        return data
  }
  
}
)


const {data:reviews,isLoading}=useQuery({
  queryKey:['reviews'],
  queryFn: async () => {
      const {data}=await axios.get(`http://localhost:9000/propertie/${id}`)
      return data
}

}
)




if(isLoading){
    return <Loading/>
}




  const handleAddToWishlist = async () => {
     
    if(user?.email==property?.agentEmail){
        return toast.error('You cannot add your own property to wishlist!')
    }
    const { _id, ...propertyWithoutId } = property;
    const {data}= await axios.post('http://localhost:9000/wishlist',{...propertyWithoutId ,
      userEmail:user?.email,
      userName:user?.displayName,
      userPhoto:user?.photoURL,
      propertyId: _id
    })


    if(data.insertedId){
        toast.success('Added to wishlist!');    
    }
   

  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const reviewData = {
      propertyId: property._id,
      propertyTitle: property.title,
      userEmail: user?.email,
      userName: user?.displayName,
      userImage: user?.photoURL,
      rating,
      comment: review,
      agentName: property.agentName,
     
    };

    try{
        const {data}=await axios.post('http://localhost:9000/reviews',reviewData)
        if(data.insertedId){
          toast.success('Review submitted successfully!');
        }
    }
    catch(error){
        toast.error(error.message);
    }
    finally{
        setShowReviewModal(false);
        setReview('');
        setRating(5);
    }
   
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                {property.verified && (
                  <div className="flex items-center text-green-500">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleAddToWishlist}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              <Heart className="w-4 h-4" />
              Add to Wishlist
            </button>
          </div>
        </div>

        {/* Property Images */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src={property.photoURL}
            alt={property.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 mb-6">{property.description}</p>
              
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <ul className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Shield className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add Review
                </button>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src={review.user.image}
                        alt={review.user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{review.user.name}</h4>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Information */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <div className="text-center mb-6">
              <img
                src={property.agentImage}
                alt={property.agentName}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{property.agentName}</h3>
              <p className="text-gray-600">Real Estate Agent</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Price Range:</span>
                <span className="font-semibold">
                  ${property.priceRange.min.toLocaleString()} - ${property.priceRange.max.toLocaleString()}
                </span>
              </div>
             
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-semibold">{property.agentEmail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 h-32"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;