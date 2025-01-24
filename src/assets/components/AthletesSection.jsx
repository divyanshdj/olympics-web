import React from "react";

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

// Athlete data
const athletes = [
  { name: "Neeraj Chopra", img: neerajImg, sport: "Javelin Throw" },
  { name: "PV Sindhu", img: pvImg, sport: "Badminton" },
  { name: "Mirabai Chanu", img: miraImg, sport: "Weightlifting" },
  { name: "Hima Das", img: himaImg, sport: "Sprint" },
  { name: "Rani Rampal", img: raniImg, sport: "Hockey" },
  { name: "Vinesh Phogat", img: vineshImg, sport: "Wrestling" },
  // New athletes
  { name: "Saina Nehwal", img: sainaImg, sport: "Badminton" },
  { name: "Bajrang Punia", img: bajrangImg, sport: "Wrestling" },
  { name: "Mary Kom", img: maryImg, sport: "Boxing" },
];

const AthletesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {athletes.map((athlete, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={athlete.img}
            alt={athlete.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-orange-600">{athlete.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{athlete.sport}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AthletesSection;
