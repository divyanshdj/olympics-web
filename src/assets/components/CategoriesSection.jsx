import React from "react";
import hockeyImage from "../images/hockey.jpg";
import badmintonImage from "../images/badminton.jpg";
import wrestlingImage from "../images/wrestling.jpg";
import boxingImage from "../images/boxing.jpg";

const categories = [
  { name: "Hockey", img: hockeyImage },
  { name: "Badminton", img: badmintonImage },
  { name: "Wrestling", img: wrestlingImage },
  { name: "Boxing", img: boxingImage },
];


const CategoriesSection = () => {
  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={category.img}
            alt={category.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Explore news, players, and more in {category.name}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
