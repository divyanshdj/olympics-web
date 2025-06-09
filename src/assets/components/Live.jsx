/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Live = () => {
  return (
    <section id="live" className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Live Stream</span>
            <span className="block text-orange-500 text-4xl mt-2">🎥</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Watch live sports action from around the world
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Live Stream */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/_WjLIpQHOzw?si=OrgMBZRt4YRjsX67"
                title="Olympic Wrestling Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Olympic Wrestling Live Stream</h3>
              <p className="text-gray-600">
                Watch the live stream of the ongoing Olympic wrestling events. Don't miss out on the action!
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="ml-2">LIVE NOW</span>
              </div>
            </div>
          </div>

          {/* Secondary Stream */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/A7wI4LmmdMc?si=CP3IkIKn7QUJ9OE9"
                title="Dangal Arena TV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dangal Arena TV</h3>
              <p className="text-gray-600">
                Experience live Kushti (traditional Indian wrestling) matches and more on Dangal Arena TV.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="ml-2">UPCOMING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Matches */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Matches</h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 sm:grid-cols-3">
              {[
                { time: "10:00", team1: "IND", team2: "PAK", sport: "Hockey" },
                { time: "12:30", team1: "IND", team2: "CHN", sport: "Badminton" },
                { time: "15:45", team1: "IND", team2: "USA", sport: "Wrestling" },
                { time: "18:00", team1: "IND", team2: "JPN", sport: "Boxing" },
                { time: "21:15", team1: "IND", team2: "AUS", sport: "Cricket" },
              ].map((match, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="text-sm text-gray-500 mb-2">{match.time}</div>
                  <div className="font-bold text-gray-800">{match.sport}</div>
                  <div className="mt-2">
                    <span className="font-medium">{match.team1}</span> vs <span className="font-medium">{match.team2}</span>
                  </div>
                  <button className="mt-3 text-xs bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded cursor-pointer">
                    Remind Me
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;