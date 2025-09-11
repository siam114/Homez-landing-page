import React from "react";
import heroImg from "../assets/bg-image.png";

import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    </section>
  );
};

export default HeroSection;
