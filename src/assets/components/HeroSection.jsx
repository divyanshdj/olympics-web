import React from "react";
import bgImg from "../images/bg.jpg"; // Example background image path

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[350px] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white px-4 py-10">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-shadow-md">
          🇮🇳 Cheers for India in the Olympics!
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Follow India's journey in global sports events, celebrating athletic achievements and hard work.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
