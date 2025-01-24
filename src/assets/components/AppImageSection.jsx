import React from "react";
import appImage from "../images/app.png"; // Make sure the path is correct

const AppImageSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">Download Our App</h2>
        <p className="text-lg text-gray-700 mb-8">
          Get access to the latest sports news, live updates, and more right at your fingertips.
        </p>
        <img src={appImage} alt="App" className="w-full rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default AppImageSection;
