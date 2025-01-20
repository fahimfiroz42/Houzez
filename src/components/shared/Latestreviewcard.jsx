import { Star } from 'lucide-react';


const Latestreviewcard = ({review}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img src={review.userImage} alt={review.userName} className="w-12 object-cover h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{review.userName}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-500">Property: {review.propertyTitle}</p>
 </div>
    );
};

export default Latestreviewcard;