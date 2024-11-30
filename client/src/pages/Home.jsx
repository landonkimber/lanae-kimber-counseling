import React from "react";
import { Calendar, Computer, Laptop, MessageCircle, Phone } from "lucide-react";
import ExpertiseTile from "/src/components/ExpertiseTile";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[url('/src/assets/sasha-freemind-unsplash.jpg')] bg-cover bg-center py-16 px-4 bg-blend-overlay bg-gray-800/50 shadow z-0">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center h-[33vh]">
          <h1 className="text-4xl font-bold text-teal-50 mb-6 select-none">
            Start Your Journey to Better Mental Health!
          </h1>
          <button className="bg-teal-600 w-60 hover:bg-teal-700 text-white px-6 py-2 rounded-md select-none">
            Schedule Consultation
          </button>
        </div>
      </div>
      <div id="home" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl text-gray-800 font-semi-bold mb-4 select-none">
            Are you ready to make a change?
          </h1>{" "}
          <div className="h-1 w-full bg-teal-600 mx-auto mt-4 mb-8"></div>
          <div className="relative flow-root">
            <img
              src="/src/assets/lanae.jpg"
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
          <h1 className="text-4xl text-gray-800 text-left mb-4 select-none">
            Specialties
          </h1>
          <div
            id="specialties-cards"
            className="grid grid-cols-3 gap-4 lg:gap-8"
          >
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110 hover:text-white hover:bg-teal-400">
              <h3 className="text-sm lg:text-xl font-semibold mb-2 text-center select-none">
                Life Transitions
              </h3>
              <div className="aspect-square">
                <img
                  src="/src/assets/moving.jpg"
                  alt="Life Transitions"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-teal-400">
              <h3 className="text-sm lg:text-xl font-semibold mb-2 text-center select-none">
                LGBTQ+
              </h3>
              <div className="aspect-square">
                <img
                  src="/src/assets/lgbtq.jpg"
                  alt="LGBTQ+"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-teal-400">
              <h3 className="text-sm lg:text-xl font-semibold mb-2 text-center select-none">
                Women's Issues
              </h3>
              <div className="aspect-square">
                <img
                  src="/src/assets/woman.jpg"
                  alt="Women's Issues"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          <div id="tileSection">
            <ExpertiseTile />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-teal-600 text-left mb-4">Services</h1>
          <div className="h-1 w-full bg-teal-600 mx-auto mt-4 mb-8"></div>
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
    </div>
  );
};

export default Home;
