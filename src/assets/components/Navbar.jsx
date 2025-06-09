/* eslint-disable no-unused-vars */
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
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img className="h-12 w-auto" src={logoImg} alt="Logo" />
            <span className="ml-3 text-white text-xl font-bold block">
              Dangal Arena Sports
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-orange-400 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <FaHome className="text-lg" />
                Home
              </a>
              <a
                href="#live"
                className="text-gray-300 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <FaBroadcastTower className="text-lg" />
                Live
              </a>
              <a
                href="#live"
                className="text-gray-300 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <FaVideo className="text-lg" />
                Videos
              </a>
              <a
                href="#events"
                className="text-gray-300 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <FaCalendarAlt className="text-lg" />
                Events
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-lg cursor-pointer">
                <FaGooglePlay className="text-lg" />
                Download App
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-lg cursor-pointer">
                <FiLogIn className="text-lg" />
                Login
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
          >
            <FaHome />
            Home
          </a>
          <a
            href="#live"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
          >
            <FaBroadcastTower />
            Live
          </a>
          <a
            href="#videos"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
          >
            <FaVideo />
            Videos
          </a>
          <a
            href="#events"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
          >
            <FaCalendarAlt />
            Events
          </a>
          <div className="pt-4 pb-2 border-t border-gray-700 space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
              <FaGooglePlay />
              Download App
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
              <FiLogIn />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;