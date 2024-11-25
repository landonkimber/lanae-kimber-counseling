import React from "react";
import { Calendar, MessageCircle, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-orange-500">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-semibold text-teal-600">
              Lanae Kimber
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-teal-600">
                About
              </a>
              <a href="#services" className="text-gray-600 hover:text-teal-600">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600">
                Contact
              </a>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
              Book Session
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your Journey to Better Mental Health
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional therapy services to help you overcome challenges and
            live a more fulfilling life.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md">
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
              <Calendar className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Couples Counseling</h3>
              <p className="text-gray-600">
                Work together to strengthen your relationship and improve
                communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Sessions</h3>
              <p className="text-gray-600">
                Convenient virtual therapy sessions from the comfort of your
                home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            />
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 text-center">
        <p>&copy; 2024 Dr. Sarah Johnson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
