/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// Import athlete images in .avif format
import neerajImg from "../images/neeraj.avif";
import pvImg from "../images/pv.avif";
import miraImg from "../images/mira.avif";
import himaImg from "../images/hima.avif";
import raniImg from "../images/rani.avif";
import vineshImg from "../images/vinesh.avif";
import sainaImg from "../images/saina.avif";
import bajrangImg from "../images/bajrang.avif";
import maryImg from "../images/mary.avif";

// Athlete data with additional details
const athletes = [
  {
    name: "Neeraj Chopra",
    img: neerajImg,
    sport: "Javelin Throw",
    description: "Olympic gold medalist and world champion in javelin throw.",
  },
  {
    name: "PV Sindhu",
    img: pvImg,
    sport: "Badminton",
    description: "Two-time Olympic medalist and former world champion.",
  },
  {
    name: "Mirabai Chanu",
    img: miraImg,
    sport: "Weightlifting",
    description: "Olympic silver medalist and Commonwealth Games champion.",
  },
  {
    name: "Hima Das",
    img: himaImg,
    sport: "Sprint",
    description: "First Indian sprinter to win gold at a global track event.",
  },
  {
    name: "Rani Rampal",
    img: raniImg,
    sport: "Hockey",
    description: "Former captain of the Indian women's hockey team.",
  },
  {
    name: "Vinesh Phogat",
    img: vineshImg,
    sport: "Wrestling",
    description: "Commonwealth Games gold medalist and Asian champion.",
  },
  {
    name: "Saina Nehwal",
    img: sainaImg,
    sport: "Badminton",
    description: "Olympic bronze medalist and former world number one.",
  },
  {
    name: "Bajrang Punia",
    img: bajrangImg,
    sport: "Wrestling",
    description: "Olympic bronze medalist and multiple-time world medalist.",
  },
  {
    name: "Mary Kom",
    img: maryImg,
    sport: "Boxing",
    description: "Six-time world champion and Olympic bronze medalist.",
  },
];

const AthletesSection = () => {
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  // Handle modal open
  const openModal = (athlete) => {
    setSelectedAthlete(athlete);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedAthlete(null);
  };

  // Handle image load
  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              role="article"
              aria-labelledby={`athlete-${index}`}
            >
              <div className="relative w-full h-64">
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-xl" />
                )}
                <img
                  src={athlete.img}
                  alt={`${athlete.name}, ${athlete.sport} athlete`}
                  className={`w-full h-full object-cover rounded-t-xl transition-opacity duration-300 ${
                    imageLoaded[index] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3
                  id={`athlete-${index}`}
                  className="text-lg font-bold text-orange-700 mb-1"
                >
                  {athlete.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{athlete.sport}</p>
                <button
                  onClick={() => openModal(athlete)}
                  className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label={`Learn more about ${athlete.name}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for athlete details */}
        {selectedAthlete && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="bg-white rounded-xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute m-3 top-4 right-4 text-white hover:text-gray-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedAthlete.img}
                alt={selectedAthlete.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3
                id="modal-title"
                className="text-xl font-bold text-orange-700 mb-2"
              >
                {selectedAthlete.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {selectedAthlete.sport}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {selectedAthlete.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AthletesSection;