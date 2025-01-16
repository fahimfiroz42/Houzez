import { MapPin, DollarSign, Shield, Trash2, CreditCard } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {

    const navigate =useNavigate()
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      title: "Luxury Villa with Pool",
      location: "Beverly Hills, CA",
      price: {
        min: 2500000,
        max: 3000000
      },
      verified: true,
      agent: {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
      }
    },
    // Add more items
  ]);

  const handleRemove = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    toast.success('Removed from wishlist');
  
  };

  const handleMakeOffer = (id) => {
    // Navigate to offer page or show modal
    toast.success('Redirecting to make an offer...');
    navigate(`/dashboard/user/make-offer/${id}`);
    
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Browse Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
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
                    ${item.price.min.toLocaleString()} - ${item.price.max.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.agent.image}
                      alt={item.agent.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{item.agent.name}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleMakeOffer(item.id)}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Make Offer
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
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