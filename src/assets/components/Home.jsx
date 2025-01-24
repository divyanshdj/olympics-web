import React from "react";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import AthletesSection from "./AthletesSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Section */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Main Heading for Home Page */}
        <h1 className="text-4xl font-extrabold text-center text-orange-800 mb-12">
          Welcome to the World of Indian Sports! 🏅
        </h1>

        {/* Categories and Athletes Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Section - Categories (Vertically Aligned) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">Categories</h2>
            <CategoriesSection />
          </div>
          
          {/* Right Section - Athletes */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">Featured Athletes</h2>
            <AthletesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
