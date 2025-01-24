import React from "react";
import { FaNewspaper, FaCalendarAlt } from "react-icons/fa";

const newsArticles = [
  {
    title: "Neeraj Chopra Wins Gold Again!",
    description: "India's golden boy bags another gold medal in the javelin throw.",
    date: "20th Jan 2025",
  },
  {
    title: "Hockey Team Makes it to Finals",
    description: "Indian hockey team stuns opponents to secure their spot in the finals.",
    date: "18th Jan 2025",
  },
  {
    title: "PV Sindhu in Top Form",
    description: "PV Sindhu dominates the badminton court with consecutive wins.",
    date: "15th Jan 2025",
  },
  {
    title: "India Wins Bronze in Archery",
    description: "Indian archery team clinches a bronze in the world championship.",
    date: "12th Jan 2025",
  },
  {
    title: "India's Hockey Victory Over Australia",
    description: "Indian men's hockey team defeats Australia in a nail-biting semi-final.",
    date: "5th Jan 2025",
  },
  {
    title: "Deepika Kumari Breaks National Record",
    description: "Deepika Kumari sets a new record in archery, making India proud.",
    date: "2nd Jan 2025",
  },
];

const News = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Latest News 📰
      </h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-6">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-80 flex-shrink-0"
            >
              <h3 className="text-xl font-semibold text-gray-700 flex items-center mb-3">
                <FaNewspaper className="text-orange-500 mr-3" /> {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{article.description}</p>
              <p className="text-sm text-gray-500 flex items-center">
                <FaCalendarAlt className="text-orange-500 mr-2" /> {article.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
