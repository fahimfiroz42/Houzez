import AdvertisementCard from "./shared/AdvertisementCard";



const Advertisement = () => {
    const featuredProperties = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
          title: "Luxury Villa with Pool",
          location: "Beverly Hills, CA",
          price: "$2,500,000 - $3,000,000",
          verified: true,
          agent: {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
          }
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
          title: "Modern  Apartment",
          location: "Manhattan, NY",
          price: "$850,000 - $950,000",
          verified: true,
          agent: {
            name: "Jane Smith",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
          }
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
          title: "Seaside Beach House",
          location: "Malibu, CA",
          price: "$3,200,000 - $3,500,000",
          verified: true,
          agent: {
            name: "Mike Johnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
          }
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3",
          title: "Mountain View Estate",
          location: "Aspen, CO",
          price: "$4,500,000 - $5,000,000",
          verified: true,
          agent: {
            name: "Sarah Wilson",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3"
          }
        }
      ];
    return (
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map(property=> <AdvertisementCard key={property.id} property={property} ></AdvertisementCard>  )}
          </div>
        </div>
      </section>
    );
};

export default Advertisement;