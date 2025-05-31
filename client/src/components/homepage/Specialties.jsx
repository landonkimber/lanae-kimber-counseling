import React from "react";

import ExpertiseTile from "/src/components/homepage/ExpertiseTile";
import ExpertiseTileMobile from "/src/components/homepage/ExpertiseTileMobile";

import movingImage from "/moving.jpg";
import lgbtqImage from "/lgbtq.jpg";
import womanImage from "/woman.jpg";

const Specialties = () => {
  const screenWidth = window.innerWidth;

  return (
    <div id="top-specialties" className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/*  */}
        <h1 className="text-4xl text-sky-800 font-assistant text-left mb-4 select-none">
          Specializes in
        </h1>
        <div
          id="specialties-cards"
          className="relative grid grid-cols-3 gap-4 lg:gap-8 min-h-[22rem] lg:min-h-[26rem]"
        >
          <div className="relative">
            <div className="absolute bg-white p-4 lg:p-6 rounded-lg text-yellow-500 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:text-white hover:bg-teal-400 group hover:shadow-2xl hover:shadow-teal-50">
              <h3 className="text-sm lg:text-xl font-assitant font-bold mb-1 text-center select-none group-hover:text-white group-hover:font-bold group-hover:text-2xl">
                Life Transitions
              </h3>
              <div className="h-1 w-[33%] bg-sky-800 mx-auto mb-4 transition-colors duration-300 group-hover:bg-teal-200"></div>
              <div className="aspect-square">
                <img
                  src={movingImage}
                  alt="Life Transitions"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-white p-4 lg:p-6 rounded-lg text-yellow-500 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:text-white hover:bg-teal-400 group hover:shadow-2xl hover:shadow-teal-50">
              <h3 className="text-sm lg:text-xl font-assistant font-bold mb-1 text-center select-none group-hover:text-white group-hover:font-bold group-hover:text-2xl">
                LGBTQ+
              </h3>
              <div className="h-1 w-[33%] bg-sky-800 mx-auto mb-4 transition-colors duration-300 group-hover:bg-teal-200"></div>
              <div className="aspect-square">
                <img
                  src={lgbtqImage}
                  alt="LGBTQ+"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-white p-4 lg:p-6 rounded-lg text-yellow-500 shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:text-white hover:bg-teal-400 group hover:shadow-2xl hover:shadow-teal-50">
              <h3 className="text-sm lg:text-xl font-assitant font-bold mb-1 text-center select-none group-hover:text-white group-hover:font-bold group-hover:text-2xl">
                Women's Issues
              </h3>
              <div className="h-1 w-[33%] bg-sky-800 mx-auto mb-4 transition-colors duration-300 group-hover:bg-teal-200"></div>
              <div className="aspect-square">
                <img
                  src={womanImage}
                  alt="Women's Issues"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Small tiles */}
        <div id="tileSection">
          {screenWidth < 1050 ? <ExpertiseTileMobile /> : <ExpertiseTile />}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
