/* eslint-disable no-unused-vars */
import React from "react";
import AppImageSection from "./AppImageSection";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <AppImageSection />
      
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Dangal Arena</h3>
              <p className="text-gray-400">
                Your premier destination for Indian sports news, live events, and athlete profiles.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#live" className="text-gray-400 hover:text-white">Live</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Athletes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Sports</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Wrestling</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Hockey</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Badminton</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Athletics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Boxing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic">
                <p>Dangal Arena Sports</p>
                <p>123 Sports Complex</p>
                <p>New Delhi, India 110001</p>
                <p className="mt-2">Email: info@dangalarena.com</p>
                <p>Phone: +91 98765 43210</p>
              </address>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Dangal Arena Sports. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;