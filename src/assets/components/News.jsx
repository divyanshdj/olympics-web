/* eslint-disable no-unused-vars */
import React from "react";
import { FaNewspaper, FaCalendarAlt } from "react-icons/fa";

const newsArticles = [
  {
    title: "Neeraj Chopra Wins Gold Again!",
    description: "India's golden boy bags another gold medal in the javelin throw.",
    date: "20th Jan 2025",
    category: "Athletics",
  },
  {
    title: "Hockey Team Makes it to Finals",
    description: "Indian hockey team stuns opponents to secure their spot in the finals.",
    date: "18th Jan 2025",
    category: "Hockey",
  },
  {
    title: "PV Sindhu in Top Form",
    description: "PV Sindhu dominates the badminton court with consecutive wins.",
    date: "15th Jan 2025",
    category: "Badminton",
  },
  {
    title: "India Wins Bronze in Archery",
    description: "Indian archery team clinches a bronze in the world championship.",
    date: "12th Jan 2025",
    category: "Archery",
  },
  {
    title: "India's Hockey Victory Over Australia",
    description: "Indian men's hockey team defeats Australia in a nail-biting semi-final.",
    date: "5th Jan 2025",
    category: "Hockey",
  },
  {
    title: "Deepika Kumari Breaks National Record",
    description: "Deepika Kumari sets a new record in archery, making India proud.",
    date: "2nd Jan 2025",
    category: "Archery",
  },
];

const News = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Latest Sports News</span>
            <span className="block text-orange-500 text-4xl mt-2">📰</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay updated with the latest happenings in Indian sports
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-orange-100 p-2 rounded-lg">
                    <FaNewspaper className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
                    <p className="text-sm text-orange-500">{article.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="flex-shrink-0 text-orange-500" />
                  <span className="ml-2">{article.date}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="text-orange-500 hover:text-orange-600 font-medium text-sm cursor-pointer">
                  Read Full Story →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors cursor-pointer">
            Load More News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;