import React from "react";

const GridSection = () => {
  const properties = [
    {
      id: 1,
      title: "Studio",
      propertiesCount: 7,
      img: "https://i.ibb.co.com/2dSZwFY/stdio.jpg",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: 2,
      title: "Apartment",
      propertiesCount: 17,
      img: "https://i.ibb.co.com/C575LWH/sarah-dorweiler-7t-Fl-UFGa7-Dk-unsplash.jpg",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 3,
      title: "Office",
      propertiesCount: 3,
      img: "https://i.ibb.co.com/CbkfGGM/alesia-kazantceva-E8d-Absee-FLo-unsplash.jpg",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      id: 4,
      title: "Single Family Home",
      propertiesCount: 10,
      img: "https://i.ibb.co.com/Kz7sS2m/ionut-vlad-id-XQEOxhmv-U-unsplash-1.jpg",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 5,
      title: "Shop",
      propertiesCount: 3,
      img: "https://i.ibb.co.com/GC5XYKZ/nafinia-putra-Kwdp-0pok-I-unsplash-1.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 6,
      title: "Villa",
      propertiesCount: 10,
      img: "https://i.ibb.co.com/RQtXXvZ/adam-papp-Qe1v-Tx-WDfe0-unsplash.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-gray-800">
          Residential
          </h2>
          <p className="text-gray-600 mt-2">
            Discover a wide range of properties across various categories.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6 grid-rows-2">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`relative overflow-hidden rounded-lg shadow-md group col-span-${property.colSpan} row-span-${property.rowSpan}`}
            >
              {/* Background Image */}
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <p className="text-md mb-2">{property.propertiesCount} Properties</p>
                <h3 className="text-3xl font-semibold">{property.title}</h3>
                <button className="text-md font-medium mt-4 flex items-center gap-1 group-hover:underline">
                  More Details <span>&#9654;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridSection;
