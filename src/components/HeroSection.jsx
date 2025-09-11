import React from "react";
import heroImg from "../assets/bg-image.png";

const HeroSection = () => {
  return (
    <section
      className="relative md:w-full w-[320px] h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center"
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
