import React from "react";
import { Calendar, Computer, Laptop, MessageCircle, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[url('/src/assets/sasha-freemind-unsplash.jpg')] bg-cover bg-center py-16 px-4 bg-blend-overlay bg-gray-800/50 shadow z-0">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center h-[33vh]">
          <h1 className="text-4xl font-bold text-teal-50 mb-6">
            Start Your Journey to Better Mental Health!
          </h1>
          <button className="bg-teal-600 w-60 hover:bg-teal-700 text-white px-6 py-2 rounded-md">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MessageCircle className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Individual Therapy</h3>
              <p className="text-gray-600">
                One-on-one sessions focused on your personal growth and
                well-being.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Laptop className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Sessions</h3>
              <p className="text-gray-600">
                Convenient virtual therapy sessions from the comfort of your
                home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                Call today to schedule a free 15-minute consultation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specialities Section */}
      <div id="services" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Specializing in
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
