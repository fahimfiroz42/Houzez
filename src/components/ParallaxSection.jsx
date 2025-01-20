
import { DollarSign, Home, Key, HelpCircle } from "lucide-react";

const ParallaxSection = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/XVtSbd7/avi-werde-h-Hz4yrvxwl-A-unsplash.jpg')", // Replace with your background image URL
        height: "600px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-3xl font-semibold">
          Houzez offers a wide range of drag-and-drop widgets
        </h2>
        <p className="text-lg mt-2">
          to assist you in designing your pages
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 max-w-4xl">
          {/* Looking to Buy */}
          <div className="bg-blue-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition">
            <DollarSign className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-lg font-medium">Looking to Buy</h3>
          </div>

          {/* Sell Your Home */}
          <div className="bg-blue-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition">
            <Home className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-lg font-medium">Sell Your Home</h3>
          </div>

          {/* Rent a Place */}
          <div className="bg-blue-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition">
            <Key className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-lg font-medium">Rent a Place</h3>
          </div>

          {/* Need Help */}
          <div className="bg-blue-800 bg-opacity-70 p-6 rounded-lg hover:bg-opacity-90 transition">
            <HelpCircle className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-lg font-medium">Need Help?</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
