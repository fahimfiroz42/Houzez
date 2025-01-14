import {  Search } from 'lucide-react';

const Banner = () => {
    return (
        <div>
            <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-center">Find Your Dream Home</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">Discover the perfect property from our extensive collection of luxury homes, apartments, and estates.</p>
            
            {/* Search Bar */}
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search by location..."
                  className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default Banner;