import React from "react";
import blog1 from "../assets/blog 1.png";
import blog2 from "../assets/blog 2.png";
import blog3 from "../assets/blog 3.png";
import blog4 from "../assets/blog 4.png";

import trust1 from "../assets/b1.jpg.png";
import trust2 from "../assets/b2.jpg.png";
import trust3 from "../assets/b3.jpg.png";
import trust4 from "../assets/b4.jpg.png";
import trust5 from "../assets/b5.jpg.png";
import trust6 from "../assets/b6.jpg.png";

const BlogSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          From Our Blog
        </h2>
        <p className="text-gray-500 mt-2">
          Aliquam lacinia diam quis lacus euismod
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <div className="relative w-full h-[180px]">
            <img
              src={blog4}
              alt="blog1"
              className="w-full h-full object-cover"
            />
            {/* Date overlay */}
            <div className="absolute -bottom-4 right-3 bg-white rounded-lg px-3 py-1 shadow text-center">
              <p className="text-xl font-bold">03</p>
              <p className="text-xs text-gray-500">Feb</p>
            </div>
          </div>
          <div className="p-4 flex-1">
            <span className="text-sm text-gray-500">Townhome</span>
            <h3 className="font-semibold text-lg mt-2">
              Unveils the Best Canadian Cities for Biking and Walk
            </h3>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <div className="relative w-full h-[180px]">
            <img
              src={blog3}
              alt="blog2"
              className="w-full h-full object-cover"
            />
            {/* Date overlay */}
            <div className="absolute -bottom-4 right-3 bg-white rounded-lg px-3 py-1 shadow text-center">
              <p className="text-xl font-bold">03</p>
              <p className="text-xs text-gray-500">Feb</p>
            </div>
          </div>
          <div className="p-4 flex-1">
            <span className="text-sm text-gray-500">Villa</span>
            <h3 className="font-semibold text-lg mt-2">
              Diamond Manor Apartment in the New York and Service
            </h3>
          </div>
        </div>

        {/* Blog Card 3 (List Style) */}
        <div className="flex flex-col gap-6">
          {/* Small Blog 1 */}
          <div className="flex items-center gap-4 bg-white rounded-lg shadow hover:shadow-lg transition p-3">
            <img
              src={blog2}
              alt="blog3"
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <span className="text-sm text-gray-500">Townhome</span>
              <h4 className="font-semibold text-base">
                7 Simple Ways to Keep Your Kids' Toys From...
              </h4>
              <p className="text-gray-500 text-sm">Feb 3, 2023</p>
            </div>
          </div>
          {/* Small Blog 2 */}
          <div className="flex items-center gap-4 bg-white rounded-lg shadow hover:shadow-lg transition p-3">
            <img
              src={blog1}
              alt="blog4"
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <span className="text-sm text-gray-500">Houses</span>
              <h4 className="font-semibold text-base">
                Housing Markets That Changed the Most This...
              </h4>
              <p className="text-gray-500 text-sm">Feb 3, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="mt-16">
        <p className="text-center text-gray-500 mb-6">
          Trusted by the world’s best
        </p>
        <div className="flex items-center justify-center gap-10 sm:gap-28 md:gap-14 flex-wrap">
          <img src={trust1} alt="Amazon" className="h-8 sm:h-10 object-contain" />
          <img src={trust2} alt="AMD" className="h-8 sm:h-10 object-contain" />
          <img src={trust3} alt="Cisco" className="h-8 sm:h-10 object-contain" />
          <img src={trust4} alt="Dropcam" className="h-8 sm:h-10 object-contain" />
          <img src={trust5} alt="Logitech" className="h-8 sm:h-10 object-contain" />
          <img src={trust6} alt="Spotify" className="h-8 sm:h-10 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
