import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../assets/m13.jpg.png"
import image2 from "../assets/m9.jpg.png"
import image3 from "../assets/m10.jpg.png"

const testimonials = [
  {
    id: 1,
    name: "Ali Tufan",
    role: "Marketing",
    image: image1,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "Designer",
    image: image3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Developer",
    image: image2,
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
  },
   {
    id: 1,
    name: "Ali Tufan",
    role: "Marketing",
    image: image1,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "Designer",
    image: image3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Developer",
    image: image2,
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          People Love Living With Realtor
        </h2>
        <p className="text-gray-500 mt-2">
          Aliquam lacinia diam quis lacus euismod
        </p>

        {/* Swiper */}
        <div className="mt-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item,index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic text-left">
                    “{item.text}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {[1, 2, 3, 4].map((dot,index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                dot === 1 ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
