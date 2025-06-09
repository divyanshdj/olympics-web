/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import bgImg from "../images/bg.jpg";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={bgImg}
          alt="Indian athletes celebrating"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Cheer for <span className="text-orange-400">India</span> in Global Sports
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Follow India's journey in international sports events, celebrating our athletes' achievements and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg transform transition hover:scale-105">
              Watch Live
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium text-lg shadow-lg transform transition hover:scale-105">
              Upcoming Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;