import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthPovider/AuthPovider";

const MakeOffer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {user}=useContext(AuthContext)
 
  const [offerAmount, setOfferAmount] = useState("");
  const [buyingDate, setBuyingDate] = useState("");

  const properties=[
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
      }

  ]

  const property = properties.find((p) => p.id === parseInt(id));
  if (!property) {
    return <p>Property not found</p>;
  }


  const handleOfferSubmit = () => {
    // Validation for user role
    if (user.role !== "buyer") {
      toast.error("Only buyers can make offers!");
      return;
    }

    // Validate offer amount
    if (offerAmount < property.price.min || offerAmount > property.price.max) {
      toast.error(
        `Offer must be between $${property.price.min.toLocaleString()} and $${property.price.max.toLocaleString()}`
      );
      return;
    }

    // Save the data to the database
    const offerData = {
      propertyId: property.id,
      title: property.title,
      location: property.location,
      agentName: property.agent.name,
      buyerEmail: user.email,
      buyerName: user.displayName,
      offerAmount,
      buyingDate,
      status: "pending",
    };

    // Simulate API request
    toast.success("Offer submitted successfully");
    navigate("/property-bought"); // Redirect after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Make an Offer</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOfferSubmit();
        }}
      >
        {/* Readonly Fields */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Property Title</label>
          <input
            type="text"
            value={property.title}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Property Location</label>
          <input
            type="text"
            value={property.location}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Agent Name</label>
          <input
            type="text"
            value={property.agent.name}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Buyer Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block  font-medium mb-1">Buyer Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Offer Amount */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Offer Amount</label>
          <input
            type="number"
            value={offerAmount}
            onChange={(e) => setOfferAmount(parseInt(e.target.value))}
            placeholder={`Between $${property.price.min} and $${property.price.max}`}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Buying Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Buying Date</label>
          <input
            type="date"
            value={buyingDate}
            onChange={(e) => setBuyingDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Offer
        </button>
      </form>
    </div>
  );
};

export default MakeOffer;
