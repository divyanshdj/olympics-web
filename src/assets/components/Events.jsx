/* eslint-disable no-unused-vars */
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
    <section id="events" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Upcoming Events</span>
            <span className="block text-orange-500 text-4xl mt-2">🗓️</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Mark your calendars for these exciting sports events across India
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-500 rounded-lg p-3">
                    <FaCalendarAlt className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{event.name}</h3>
                    <p className="text-sm text-orange-500">{event.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{event.description}</p>
                <div className="mt-6 flex items-center">
                  <FaMapMarkerAlt className="flex-shrink-0 text-orange-500" />
                  <p className="ml-2 text-sm text-gray-500">{event.address}</p>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors cursor-pointer">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;