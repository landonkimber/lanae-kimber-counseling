import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Computer, Laptop, MessageCircle, Phone } from "lucide-react";

import Insurances from "/src/components/homepage/Insurances";
import AboutComponent from "../components/homepage/AboutComponent";
import Specialties from "../components/homepage/Specialties";
import ServicesIntro from "../components/homepage/ServicesIntro";
import Contact from "./Contact.jsx"

const Home = () => {
  window.scrollTo(0, 0);

  const screenWidth = window.innerWidth;
  const MobileText = screenWidth < 768 ? "text-2xl" : "text-4xl";
  return (
    <div id="home" className="min-h-screen bg-gray-50 scroll-mt-32">
      {/* Hero Section */}
      <div className="relative bg-[url('/sasha-freemind-unsplash.jpg')] bg-cover bg-center py-16 px-4 bg-blend-overlay bg-gray-800/50 shadow z-2">
        <div className="flex flex-col justify-center items-center text-center h-[40vh] select-none">
          <h1
            className={`${MobileText} font-quicksand animate-fadeIn text-teal-50 mb-6`}
          >
            Start your journey to better mental health today!
          </h1>
          <a
            href="#contact"
            className={`bg-teal-500 w-100 hover:bg-gray-50 hover:text-teal-500 text-white font-quicksand ${MobileText} px-6 mt-18 py-2 rounded-md animate-fadeInDelayed z-3`}
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      <ServicesIntro />

      <Insurances />

      <Specialties />
      {/* About Section */}
      <AboutComponent />

      <Contact />
    </div>
  );
};

export default Home;
