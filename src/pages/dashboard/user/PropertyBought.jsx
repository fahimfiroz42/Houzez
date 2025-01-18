import { useContext, useState } from 'react';
import { MapPin, DollarSign, CheckCircle, XCircle, CreditCard, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../../AuthPovider/AuthPovider';

const PropertyBought = () => {

    const {user}=useContext(AuthContext)
//   const [properties, setProperties] = useState([
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
//       title: "Luxury Villa with Pool",
//       location: "Beverly Hills, CA",
//       offeredAmount: 2750000,
//       status: 'accepted',
//       agent: {
//         name: "John Doe",
//         image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
//       }
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
//       title: "Modern Downtown Apartment",
//       location: "Manhattan, NY",
//       offeredAmount: 900000,
//       status: 'pending',
//       agent: {
//         name: "Jane Smith",
//         image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
//       }
//     }
//   ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    name: ''
  });


  const {data:properties,isLoading}=useQuery({
    queryKey:['properties'],
    queryFn: async () => {
        const {data}=await axios.get(`http://localhost:9000/offers/${user?.email}`)
        return data
  }
  
}
)


  const handlePayment = (property) => {
    setSelectedProperty(property);
    setShowPaymentModal(true);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    
    // For demo purposes, we'll just show a success message and update the status
    setProperties(properties?.map(prop => 
      prop.id === selectedProperty.id 
        ? { ...prop, status: 'bought', transactionId: 'TXN' + Date.now() } 
        : prop
    ));
    
    setShowPaymentModal(false);
    setPaymentDetails({
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      name: ''
    });
    toast.success('Payment successful!');
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? '/' + v.slice(2, 4) : '');
    }
    return v;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center text-yellow-500">
            <XCircle className="w-4 h-4 mr-1" />
            Pending
          </span>
        );
      case 'accepted':
        return (
          <span className="flex items-center text-green-500">
            <CheckCircle className="w-4 h-4 mr-1" />
            Accepted
          </span>
        );
      case 'bought':
        return (
          <span className="flex items-center text-blue-500">
            <CheckCircle className="w-4 h-4 mr-1" />
            Bought
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Property Bought</h1>

      <div className="grid grid-cols-1 gap-6">
        { properties &&  properties.map((property) => (
          <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img
                src={property.image}
                alt={property.title}
                className="w-full md:w-64 h-48 object-cover"
              />
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  {getStatusBadge(property.status)}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>Offered Amount: ${property.offerAmount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={property.agentImage}
                      alt={property.agentName}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-600">{property.agentName}</span>
                  </div>
                  {property.status === 'accepted' && (
                    <button
                      onClick={() => handlePayment(property)}
                      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now
                    </button>
                  )}
                  {property.status === 'bought' && (
                    <div className="text-sm text-gray-600">
                      Transaction ID: {property.transactionId}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Payment Details</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">Property: {selectedProperty.title}</p>
              <p className="text-lg font-semibold">
                Amount: ${selectedProperty.offeredAmount.toLocaleString()}
              </p>
            </div>

            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  value={paymentDetails.name}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({ 
                    ...paymentDetails, 
                    cardNumber: formatCardNumber(e.target.value)
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({ 
                      ...paymentDetails, 
                      expiryDate: formatExpiryDate(e.target.value)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={paymentDetails.cvc}
                    onChange={(e) => setPaymentDetails({ 
                      ...paymentDetails, 
                      cvc: e.target.value.replace(/\D/g, '').slice(0, 3)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="123"
                    maxLength="3"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex items-center justify-center"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Pay ${selectedProperty.offeredAmount.toLocaleString()}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyBought;