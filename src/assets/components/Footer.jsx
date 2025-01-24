// eslint-disable-next-line no-unused-vars
import React from "react";
import AppImageSection from "./AppImageSection";

const Footer = () => {
  return (
    <>
      {/* Add the App Image Section here */}
      <AppImageSection />

      {/* Footer - Add your footer content here */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Dangal Arena Sports. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
