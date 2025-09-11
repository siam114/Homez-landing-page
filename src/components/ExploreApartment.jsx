import React from "react";
import img1 from '../assets/type1.jpg.png'
import img2 from '../assets/type2.jpg.png'
import img3 from '../assets/type3.jpg.png'
import img4 from '../assets/type4.jpg.png'
import img5 from '../assets/type5.jpg.png'
import img6 from '../assets/type6.jpg.png'

const categories = [
  {
    title: "Houses",
    properties: "7 Properties",
    img: img1,
    span: "md:col-span-2", // span only from md breakpoint
  },
  {
    title: "Apartments",
    properties: "3 Properties",
    img: img2,
  },
  {
    title: "Office",
    properties: "4 Properties",
    img: img3,
  },
  {
    title: "Townhome",
    properties: "2 Properties",
    img: img4,
  },
  {
    title: "Villa",
    properties: "4 Properties",
    img: img5,
  },
  {
    title: "Bungalow",
    properties: "1 Property",
    img: img6,
    span: "md:col-span-2", // span only from md breakpoint
  },
];

const ExploreApartment = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Explore Apartment Types
        </h2>
        <p className="text-gray-500 mt-2">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer group ${item.span || ""}`}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Text */}
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreApartment;
