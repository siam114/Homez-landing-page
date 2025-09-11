import React from "react";

const BlogSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
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
      <div className="grid md:grid-cols-3">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col h-[300px] w-[80%]">
          <div className="relative w-full h-[180px] aspect-square">
            <img
              src="https://picsum.photos/600/600?random=1"
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
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col h-[300px] w-[80%]">
          <div className="relative w-full h-[180px] aspect-square">
            <img
              src="https://picsum.photos/600/600?random=2"
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
          <div className="flex items-center gap-4 bg-white rounded-lg shadow hover:shadow-lg transition p-2">
            <img
              src="https://picsum.photos/200/200?random=3"
              alt="blog3"
              className="w-28 h-28 object-cover rounded"
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
          <div className="flex items-center gap-4 bg-white rounded-lg shadow hover:shadow-lg transition p-2">
            <img
              src="https://picsum.photos/200/200?random=4"
              alt="blog4"
              className="w-28 h-28 object-cover rounded"
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
        <div className="flex justify-center gap-8 flex-wrap">
          <img
            src="https://via.placeholder.com/100x40?text=Amazon"
            alt="Amazon"
          />
          <img src="https://via.placeholder.com/100x40?text=AMD" alt="AMD" />
          <img src="https://via.placeholder.com/100x40?text=Cisco" alt="Cisco" />
          <img
            src="https://via.placeholder.com/100x40?text=Dropcam"
            alt="Dropcam"
          />
          <img
            src="https://via.placeholder.com/100x40?text=Logitech"
            alt="Logitech"
          />
          <img
            src="https://via.placeholder.com/100x40?text=Spotify"
            alt="Spotify"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
