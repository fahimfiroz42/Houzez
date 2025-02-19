import { Link } from "react-router-dom";

const agents = [
  {
    name: "Fahim Farsi",
    position: "Real Estate Agent, Country House Real Estate",
    description:
      "This is a very nice and infomative website for real estate agents.One can find everything they need here. This is a very nice and infomative website for real estate agents.One can find everything they need here.",
    profileLink: "#",
    imageUrl: "https://i.ibb.co.com/0jyLQx0/rsz-50297811-2214680742105683-8215764540185378816n.jpg", // Replace with actual image URL
  },
  {
    name: "Brittany Watkins",
    position: "Company Agent, All American Real Estate",
    description:
      "This is a very nice and infomative website for real estate agents.One can find everything they need here. This is a very nice and infomative website for real estate agents.One can find everything they need here.",
    profileLink: "#",
    imageUrl: "https://i.ibb.co.com/2S2zzqQ/Lou.jpg", // Replace with actual image URL
  },
  {
    name: "Michelle Ramirez",
    position: "Company Agent, Modern House Real Estate",
    description:
      "This is a very nice and infomative website for real estate agents.One can find everything they need here. This is a very nice and infomative website for real estate agents.One can find everything they need here.",
    profileLink: "#",
    imageUrl: "https://i.ibb.co.com/c1S0dZb/Jermain-Kerman-Corporate.jpg", // Replace with actual image URL
  },
];

const MeetOurAgents = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Agents</h2>
        <p className="text-gray-600 mt-2">
          We are a team of experienced professionals dedicated <br /> to helping you find
          the perfect home for your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto"
                src={agent.imageUrl}
                alt={agent.name}
              />
              <h3 className="text-lg font-semibold text-blue-600 mt-4">
                {agent.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{agent.position}</p>
              <p className="text-gray-600 mt-2 text-sm">{agent.description}</p>
              <Link
                to={'/'}
                className="text-blue-500 font-semibold mt-4 inline-block"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurAgents;
