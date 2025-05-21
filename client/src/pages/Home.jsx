import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Computer, Laptop, MessageCircle, Phone } from "lucide-react";
import ExpertiseTile from "/src/components/ExpertiseTile";
import ExpertiseTileMobile from "/src/components/ExpertiseTileMobile";

import lanaeImage from "/lanae-headshot.jpg";
import movingImage from "/moving.jpg";
import lgbtqImage from "/lgbtq.jpg";
import womanImage from "/woman.jpg";

const Home = () => {
  const screenWidth = window.innerWidth;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[url('/sasha-freemind-unsplash.jpg')] bg-cover bg-center py-16 px-4 bg-blend-overlay bg-gray-800/50 shadow z-0">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center h-[33vh] select-none">
          <h1 className="text-4xl font-quicksand text-teal-50 mb-6 select-none">
            Start Your Journey to Better Mental Health!
          </h1>
          <Link
            to="/contact"
            className="bg-teal-600 w-100 hover:bg-teal-700 text-white text-xl px-6 py-2 rounded-md select-none"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
      <div id="home" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl text-sky-800 font-semi-bold mb-4 select-none">
            Are you ready to make a change?
          </h1>{" "}
          <div className="h-1 w-full bg-teal-600 mx-auto mt-4 mb-8"></div>
          <div className="relative flow-root">
            <img
              src={lanaeImage}
              alt="Image of Lanae Kimber"
              className="float-right ml-4 mb-4 w-32 sm:w-48 md:w-64 rounded-lg"
            />
            <p className="text-lg text-gray-600">
              Today's world can be overwhelming and lonely. With so much change
              happening around us it can create a feeling of being stuck,
              anxiety and/or depression. These changes are difficult and can
              lead to feelings of isolation without assistance. <br /> <br />{" "}
              These transitions may include divorce, job loss, reentering the
              work force, becoming a teenager or adult, leaving or changing your
              religion, moving, new relationship, parenting, losing a loved one,
              sobriety, exploring gender identity/sexuality and more. If you
              want to feel empowered, now is the time to take action. I'd love
              to get you there!
            </p>
          </div>
        </div>
      </div>
      {/* Top Specialties */}
      <div id="top-specialties" className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/*  */}
          <h1 className="text-4xl text-sky-800 text-left mb-4 select-none">
            Specialties
          </h1>
          <div
            id="specialties-cards"
            className="grid grid-cols-3 gap-4 lg:gap-8"
          >
            <div className="bg-white p-4 lg:p-6 rounded-lg text-yellow-500 shadow-sm transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:bg-teal-400 group hover:shadow-2xl hover:shadow-teal-50">
              <h3 className="text-sm lg:text-xl font-bold mb-1 text-center select-none group-hover:text-white">
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

            <div className="bg-white p-4 lg:p-6 rounded-lg text-yellow-500 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-teal-400 group hover:shadow-2xl hover:shadow-teal-50">
              <h3 className="text-sm lg:text-xl font-bold mb-1 text-center select-none group-hover:text-white">
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
            <div className="bg-white p-4 lg:p-6 rounded-lg text-yellow-500 shadow-sm transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-teal-400 group hover:shadow-2xl hover:shadow-teal-50">
              <h3 className="text-sm lg:text-xl font-bold mb-1 text-center select-none group-hover:text-white">
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
          <div id="tileSection">
            {screenWidth < 1050 ? <ExpertiseTileMobile /> : <ExpertiseTile />}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-sky-800 text-left mb-4">Services</h1>
          <div className="h-1 w-full bg-yellow-600 mx-auto mt-4 mb-8"></div>
          <div
            id="services-cards"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Individual Therapy
                </h3>
                <p className="text-gray-600">
                  One-on-one sessions focused on your personal growth and
                  well-being.
                </p>
              </div>
              <MessageCircle className="w-16 h-16 text-teal-600 flex-shrink-0" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Online Sessions
                </h3>
                <p className="text-gray-600">
                  Convenient virtual therapy sessions from the comfort of your
                  home.
                </p>
              </div>
              <Laptop className="w-16 h-16 text-teal-600 flex-shrink-0" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Free Consultation
                </h3>
                <p className="text-gray-600">
                  Call today to schedule a free 15-minute consultation.
                </p>
              </div>
              <Phone className="w-16 h-16 text-teal-600 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Specialities Section */}
      {/* <div id="specialities" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Specializing in
          </h2>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto text-center p-12 ">
        <Link
          to="/contact"
          className="bg-teal-600 font-bold w-84 h-20 hover:bg-teal-700 text-white px-6 py-2 rounded-md select-none"
        >
          Schedule Consultation Today!
        </Link>
      </div>
    </div>
  );
};

export default Home;
