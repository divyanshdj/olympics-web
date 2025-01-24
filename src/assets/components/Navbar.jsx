// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  FaHome,
  FaBroadcastTower,
  FaVideo,
  FaCalendarAlt,
  FaGooglePlay,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import logoImg from "../images/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <img className="h-10 w-auto" src={logoImg} alt="Logo" />
          <span className="text-white text-lg sm:text-xl font-semibold tracking-wide hidden sm:block">
            Dangal Arena Sports
          </span>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="flex items-center text-gray-300 hover:text-orange-500 text-sm sm:text-base font-medium transition-colors duration-300 gap-2"
          >
            <FaHome className="text-base sm:text-lg" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:text-orange-500 text-sm sm:text-base font-medium transition-colors duration-300 gap-2"
          >
            <FaBroadcastTower className="text-base sm:text-lg" />
            Live
          </a>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:text-orange-500 text-sm sm:text-base font-medium transition-colors duration-300 gap-2"
          >
            <FaVideo className="text-base sm:text-lg" />
            Video
          </a>
          <a
            href="#"
            className="flex items-center text-gray-300 hover:text-orange-500 text-sm sm:text-base font-medium transition-colors duration-300 gap-2"
          >
            <FaCalendarAlt className="text-base sm:text-lg" />
            Events
          </a>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="flex items-center bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-[10px] sm:text-base font-medium py-1 sm:py-2 px-3 sm:px-5 rounded-lg shadow-md transition-all duration-300 gap-2"
          >
            <FaGooglePlay className="text-sm sm:text-lg" />
            <span>App Download</span>
          </button>
          <button
            type="button"
            className="flex items-center bg-orange-500 hover:bg-orange-600 cursor-pointer text-white text-xs sm:text-base font-medium py-1 sm:py-2 px-3 sm:px-5 rounded-lg shadow-md transition-all duration-300 gap-2"
          >
            <FiLogIn className="text-sm sm:text-lg" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-1 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (toggle visibility) */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-2 bg-gray-800 px-4 py-3">
            <a
              href="#"
              className="block text-gray-300 hover:text-orange-500 text-sm font-medium transition-colors duration-300"
            >
              <FaHome className="inline-block mr-2 text-base" />
              Home
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-orange-500 text-sm font-medium transition-colors duration-300"
            >
              <FaBroadcastTower className="inline-block mr-2 text-base" />
              Live
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-orange-500 text-sm font-medium transition-colors duration-300"
            >
              <FaVideo className="inline-block mr-2 text-base" />
              Video
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-orange-500 text-sm font-medium transition-colors duration-300"
            >
              <FaCalendarAlt className="inline-block mr-2 text-base" />
              Events
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
