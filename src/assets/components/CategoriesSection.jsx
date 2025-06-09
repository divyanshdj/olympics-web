/* eslint-disable no-unused-vars */
import React from "react";
import hockeyImage from "../images/hockey.jpg";
import badmintonImage from "../images/badminton.jpg";
import wrestlingImage from "../images/wrestling.jpg";
import boxingImage from "../images/boxing.jpg";

const categories = [
  { name: "Hockey", img: hockeyImage, count: "24 Events" },
  { name: "Badminton", img: badmintonImage, count: "18 Events" },
  { name: "Wrestling", img: wrestlingImage, count: "32 Events" },
  { name: "Boxing", img: boxingImage, count: "15 Events" },
];

const CategoriesSection = () => {
  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img
            src={category.img}
            alt={category.name}
            className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white">{category.name}</h3>
            <p className="text-orange-300 text-sm">{category.count}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium shadow-lg">
              View Category
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;