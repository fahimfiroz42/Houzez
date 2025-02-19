import { Crown, Shield, Star, Clock, Gem, Users, Building2, Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const PremiumServices = () => {
  const premiumFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Priority Access",
      description: "Get early access to exclusive properties before they hit the market"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Dedicated Agent",
      description: "Personal real estate agent available 24/7 for your needs"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Fast-Track Processing",
      description: "Expedited paperwork and processing for all transactions"
    },
    {
      icon: <Gem className="w-8 h-8 text-blue-500" />,
      title: "Premium Listings",
      description: "Access to our curated collection of luxury properties"
    }
  ];

  const membershipPlans = [
    {
      name: "Gold",
      price: 199,
      period: "month",
      features: [
        "Priority property access",
        "Dedicated support team",
        "Monthly market insights",
        "3 Premium property visits/month"
      ],
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Platinum",
      price: 399,
      period: "month",
      features: [
        "All Gold features",
        "Personal real estate agent",
        "Weekly market reports",
        "Unlimited premium visits",
        "VIP event invitations"
      ],
      recommended: true,
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Diamond",
      price: 799,
      period: "month",
      features: [
        "All Platinum features",
        "Private property previews",
        "Investment consulting",
        "Luxury property access",
        "Helicopter property tours"
      ],
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const handleSubscribe = (plan) => {
    toast.success(`Redirecting to ${plan} subscription payment...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Building2 className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Real Estate Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your real estate experience with our premium services. Enjoy exclusive benefits and personalized attention.
          </p>
        </div>

        {/* Premium Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                plan.recommended ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-blue-500 text-white text-center py-2">
                  Recommended
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600">Membership</p>
                  </div>
                  {plan.icon}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Shield className="w-5 h-5 text-blue-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full py-3 rounded-md font-semibold ${
                    plan.recommended
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Premium Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
                alt="Sarah Johnson"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">
                "The premium service has made my property search so much easier. The dedicated agent is amazing!"
              </p>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <p className="text-gray-500">Premium Member</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
                alt="Michael Anderson"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">
                "Access to exclusive properties and VIP events has been invaluable for my real estate investments."
              </p>
              <h4 className="font-semibold">Michael Anderson</h4>
              <p className="text-gray-500">Platinum Member</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
                alt="Emily Chen"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">
                "The helicopter property tours gave me a whole new perspective on luxury real estate."
              </p>
              <h4 className="font-semibold">Emily Chen</h4>
              <p className="text-gray-500">Diamond Member</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join our premium membership today and experience the difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumServices;