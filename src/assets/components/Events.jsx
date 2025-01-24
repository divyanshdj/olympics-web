import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

const events = [
  {
    name: "Wrestling Championship",
    date: "25th Jan 2025",
    description: "Witness the epic wrestling matches featuring India's top athletes.",
    address: "Indira Gandhi Arena, Delhi",
  },
  {
    name: "Boxing Showdown",
    date: "10th Feb 2025",
    description: "An exciting evening of power-packed boxing bouts.",
    address: "Rajiv Gandhi Stadium, Mumbai",
  },
  {
    name: "Badminton Open",
    date: "5th Mar 2025",
    description: "India's finest shuttlers in action at the National Badminton Open.",
    address: "Gachibowli Indoor Stadium, Hyderabad",
  },
  {
    name: "Hockey World Cup",
    date: "15th Apr 2025",
    description: "Cheer for the Indian hockey team as they take on global champions.",
    address: "Kalinga Stadium, Bhubaneswar",
  },
  {
    name: "Athletics Meet",
    date: "20th May 2025",
    description: "A showcase of speed, endurance, and agility in the track events.",
    address: "Jawaharlal Nehru Stadium, Delhi",
  },
  {
    name: "Swimming Nationals",
    date: "30th Jun 2025",
    description: "India's best swimmers compete for glory in the National Swimming Championships.",
    address: "Sardar Patel Aquatic Complex, Ahmedabad",
  },
];

const Events = () => {
  return (
    <div className="bg-blue-50 py-10 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Upcoming Events 🗓️
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-2">
              <FaInfoCircle className="text-orange-500 mr-2" /> {event.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{event.description}</p>
            <p className="text-sm font-medium text-blue-600 flex items-center mb-2">
              <FaCalendarAlt className="text-orange-500 mr-2" /> {event.date}
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="text-orange-500 mr-2" /> {event.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
