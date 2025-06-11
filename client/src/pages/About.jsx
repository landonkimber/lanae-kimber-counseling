import React from "react";
import lanaeImage from "/lanae.jpg";
import lanaeHeadshot from "/lanae-headshot.jpg";

import { Briefcase, School } from "lucide-react";

const About = () => {
  window.scrollTo(0, 0);

  return (
    <div id="about" className="min-h-screen bg-gray-100 scroll-to-32">
      {/* Hero Section */}
      <div className="select-none flex items-center justify-center gap-8 max-w-full mx-auto pt-8 pb-8 px-4 bg-white">
        <img
          src={lanaeHeadshot}
          alt="Lanae Kimber Headshot"
          className="w-48 h-48 mr-4 rounded-full object-cover shadow-lg"
        />
        <div className="ml-4">
          <h1 className="text-4xl font-bold text-sky-800 mb-4">Lanae Kimber</h1>
          <div className="h-1 w-24 bg-teal-600 mb-4"></div>
          <p className="text-xl text-gray-600">
            Licensed Clinical Social Worker
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <div className="relative flow-root">
            <img
              src={lanaeImage}
              alt="Lanae Kimber"
              className="float-right ml-8 mb-4 w-96 rounded-lg shadow-md"
            />
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p className="mt-4">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p className="mt-4">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p className="mt-4">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">
              Education & Credentials
            </h2>
            <div className="h-1 w-full bg-yellow-500 mb-4"></div>
            <ul className="list-none list-inside space-y-2">
              <li>
                <School className="inline mr-3 mb-1" />- Clinical Mental Health
                Counseling - University of Phoenix
              </li>
              <li>
                <Briefcase className="inline mr-3 mb-1" />- In Practice for 14
                Years
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
