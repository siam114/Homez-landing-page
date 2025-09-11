import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiArrowUpRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/t1.jpg.png";
import img2 from "../assets/t2.jpg.png";
import img3 from "../assets/t3.jpg.png";
import img4 from "../assets/t4.jpg.png";
import img5 from "../assets/t5.jpg.png";

const categories = [
  { title: "Houses", properties: "7 Properties", img: img1 },
  { title: "Apartments", properties: "3 Properties", img: img2 },
  { title: "Office", properties: "4 Properties", img: img3 },
  { title: "Villa", properties: "4 Properties", img: img4 },
  { title: "Townhome", properties: "3 Properties", img: img5 },
  { title: "Townhome", properties: "3 Properties", img: img1 },
  { title: "Apartments", properties: "3 Properties", img: img2 },
   { title: "Office", properties: "4 Properties", img: img3 },
  { title: "Townhome", properties: "3 Properties", img: img5 },
];

const ExploreApartmentSlider = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Explore Apartment Types
          </h2>
          <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet.</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black">
          All Types <FiArrowUpRight className="text-lg" />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.properties}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Container */}
      <div className="custom-pagination mt-6 flex justify-center"></div>
    </section>
  );
};

export default ExploreApartmentSlider;
