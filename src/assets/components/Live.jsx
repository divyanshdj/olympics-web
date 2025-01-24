import React from "react";

const Live = () => {
  return (
    <div className="bg-orange-50 py-10 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
        Live Stream 🎥
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Olympic Wrestling Live Stream */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-orange-700 mb-4">Olympic Wrestling Live Stream</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src="https://www.youtube.com/embed/_WjLIpQHOzw?si=OrgMBZRt4YRjsX67"
              title="Olympic Wrestling Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[300px] rounded-md"
            ></iframe>
          </div>
          <p className="text-gray-700 text-sm">
            Watch the live stream of the ongoing Olympic wrestling events. Don't miss out on the action!
          </p>
        </div>

        {/* Dangal Arena TV */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-orange-700 mb-4">Dangal Arena TV</h3>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src="https://www.youtube.com/embed/A7wI4LmmdMc?si=CP3IkIKn7QUJ9OE9"
              title="Dangal Arena TV"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[300px] rounded-md"
            ></iframe>
          </div>
          <p className="text-gray-700 text-sm">
            Experience live Kushti (traditional Indian wrestling) matches and more on Dangal Arena TV.
          </p>
        </div>
      </div>

      {/* Additional Video Sections */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-orange-800 mb-4 text-center">More Dangal Arena Sports</h3>
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Video 1 */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">India vs Pakistan Wrestling Face-Off</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/fjdDSQYrp7E?si=lKeosha084w1_-sS"
                title="India vs Pakistan Wrestling"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[300px] rounded-md"
              ></iframe>
            </div>
            <p className="text-gray-700 text-sm">
              Watch the intense wrestling match between India and Pakistan at the Dangal Arena. The rivalry continues!
            </p>
          </div>

          {/* Video 2 */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">Best Moments of Indian Wrestling</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/j2a_WbuGk2c?si=7W_CDoXaG_8rhFd-"
                title="Best Moments of Indian Wrestling"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[300px] rounded-md"
              ></iframe>
            </div>
            <p className="text-gray-700 text-sm">
              Relive the most memorable moments from Indian Wrestling at the Olympics and Dangal Arena. A tribute to the champions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
