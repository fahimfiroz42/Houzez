

const Subscribe = () => {
    return (
    
    <div className="">
        <div className="bg-gradient-to-b from-[#0d60c6] to-[#1897ffe3] py-16 px-6 font-[sans-serif]">
        <div className="container mx-auto text-center">
          <h2 className="text-white md:text-5xl text-4xl font-extrabold mb-6">Join Our Exclusive Newsletter</h2>
          <p className="text-xl text-gray-300">Be part of our elite community. Get VIP access to curated content, early product releases, and special promotions.</p>
  
          <div className="bg-white shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center">
            <input type="email" placeholder="Enter your email" className="w-full md:w-96 bg-transparent border-b-2 border-[#137ad4] py-3 px-4 text-[#2e0249] text-base focus:outline-none placeholder-[#1c82f6] placeholder-opacity-70" />
            <button className="max-md:mt-6 md:ml-4 bg-[#1c91eb] hover:bg-[#081a71] text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </div>
    );
};

export default Subscribe;