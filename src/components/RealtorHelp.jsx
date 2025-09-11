import { ArrowRight } from "lucide-react";
import vector1 from '../assets/Vector.png'
import vector2 from '../assets/Vector (1).png'
import vector3 from '../assets/Vector (2).png'

const RealtorHelp = () => {
  const services = [
    {
      id: 1,
      title: "Buy a property",
      desc: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      button: "Find a home",
      buttonColor: "bg-white text-black border hover:bg-gray-100",
      icon: vector1, 
    },
    {
      id: 2,
      title: "Sell a property",
      desc: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      button: "Place an ad",
      buttonColor: "bg-[#EB6753] text-white hover:bg-[#eb6753c2]",
      icon: vector2,
    },
    {
      id: 3,
      title: "Rent a property",
      desc: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      button: "Find a rental",
      buttonColor: "bg-white text-black border hover:bg-gray-100",
      icon: vector3,
    },
  ];

  return (
    <section className="bg-[#fef2f2] py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          See How Realtor Can Help
        </h2>
        <p className="text-gray-500 mt-2">
          Aliquam lacinia diam quis lacus euismod
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 ">
          {services.map((service) => (
  <div
    key={service.id}
    className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
  >
    <div className="mb-4">
      <img 
        src={service.icon} 
        alt={service.title} 
        className="w-12 h-12 object-contain" 
      />
    </div>
    <h3 className="font-semibold text-lg text-gray-900">
      {service.title}
    </h3>
    <p className="text-gray-500 mt-2">{service.desc}</p>
    <button
      className={`mt-6 flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition ${service.buttonColor}`}
    >
      {service.button} <ArrowRight size={16} />
    </button>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default RealtorHelp;
