import React from "react";
import { FaBed, FaBath, FaArrowsAlt } from "react-icons/fa";
// import image1 from '../assets/'

const properties = [
  {
    title: "Luxury Family Home",
    price: "$5,800",
    beds: 3,
    baths: 2,
    area: 400,
    img: "https://picsum.photos/400/250?random=1",
  },
  {
    title: "Gorgeous Villa Bay",
    price: "$4,800",
    beds: 3,
    baths: 2,
    area: 300,
    img: "https://picsum.photos/400/250?random=2",
  },
  {
    title: "Skyper Pool Apartment",
    price: "$2,850",
    beds: 2,
    baths: 1,
    area: 200,
    img: "https://picsum.photos/400/250?random=3",
  },
  {
    title: "Diamond Manor Apartment",
    price: "$3,500",
    beds: 3,
    baths: 1,
    area: 200,
    img: "https://picsum.photos/400/250?random=4",
  },
];

const BestDeals = () => {
  return (
    <section className="bg-[#e85c47] py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Discover Our Best Deals
            </h2>
            <p className="text-white/80 mt-2">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="px-4 py-2 cursor-pointer rounded-md bg-white text-[#e85c47] font-medium text-sm shadow">
              For Sale
            </button>
            <button className="px-4 py-2 cursor-pointer rounded-md bg-white/20 text-white font-medium text-sm">
              For Rent
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {properties.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-36 object-cover" 
              />
              <div className="p-3"> 
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-[#e85c47] font-bold text-sm mb-2">
                  {item.price}
                </p>
                <div className="flex items-center gap-3 text-gray-600 text-xs">
                  <span className="flex items-center gap-1">
                    <FaBed className="text-sm" /> {item.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath className="text-sm" /> {item.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaArrowsAlt className="text-sm" /> {item.area} m²
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
