import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import feature1 from '../assets/feature 1.png'
import feature2 from '../assets/feature 2.png'
import feature3 from '../assets/feature 3.png'

import icon1 from '../assets/icon.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

export default function FeaturedListings() {
  const listings = [
    {
      title: "House on the Hollywood",
      price: "$4,600",
      img: feature1,
      beds: 6,
      baths: 2,
      area: 200,
    },
    {
      title: "Comfortable Villa Green",
      price: "$5,800",
      img: feature2,
      beds: 3,
      baths: 3,
      area: 600,
    },
    {
      title: "Quality House For Sale",
      price: "$2,500",
      img: feature3,
      beds: 4,
      baths: 2,
      area: 500,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Discover Our Featured Listings
            </h2>
            <p className="text-gray-500 mt-1">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <Link
            to="/properties"
            className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600"
          >
            See All Properties <FaArrowRight className='-rotate-45' />
          </Link>
        </div>

        {/* Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((listing, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={listing.img}
                  alt={listing.title}
                  className="rounded-t-lg w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#EB6753] text-white text-xs px-6 py-2 rounded-md uppercase font-semibold inline-flex items-center gap-2">
                 <img src={icon4} className="pt-2 w-4" alt="" /> Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold">
                  {listing.title}
                </h3>

                {/* Details */}
                <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                      <p className="text-red-500 font-semibold mt-1">
                  {listing.price}
                </p>
                 <div className="flex items-center gap-4">
                     <div className="flex items-center gap-1">
                       <img src={icon1} className="pt-2" alt="" /> {listing.beds}
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={icon2} className="pt-2" alt="" /> {listing.baths}
                  </div>
                  <div className="flex items-center gap-1">
                   <img src={icon3} className="pt-2" alt="" /> {listing.area}
                  </div>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {[1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-2 w-2 rounded-full ${
                dot === 1 ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
