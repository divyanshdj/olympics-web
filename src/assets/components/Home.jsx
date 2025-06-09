/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import AthletesSection from "./AthletesSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-orange-500">Dangal Arena Sports</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your ultimate destination for Indian sports news, live events, and athlete profiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
                Sports Categories
              </h2>
              <CategoriesSection />
            </div>
          </div>

          {/* Athletes Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b pb-4">
                Featured Indian Athletes
              </h2>
              <AthletesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;