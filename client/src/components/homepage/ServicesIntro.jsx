import { Calendar, Computer, Laptop, MessageCircle, Phone } from "lucide-react";

import lanaeImage from "/lanae.jpg";

const ServicesIntro = () => {
  const screenWidth = window.innerWidth;
  const MobileText =
    screenWidth < 768 ? "Free 15 Minute Consultation" : "Free Consultation";

  return (
    <div
      id="home-intro"
      class="flex flex-row max-w-6xl mx-auto bg-grey-50 items-center"
    >
      <div class="md:w-1/2 w-full p-4">
        <div
          id="services-cards"
          className="grid grid-row-1 md:grid-rows-3 gap-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-assistant font-semibold text-gray-800 mb-2">
                Individual Therapy
              </h3>

              <p className="text-gray-600 hidden md:block">
                One-on-one sessions focused on your personal growth and
                well-being.
              </p>
            </div>
            <MessageCircle className="w-16 h-16 text-teal-600 flex-shrink-0" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between gap-6">
            <Laptop className="w-16 h-16 text-teal-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-assistant font-semibold text-gray-800 mb-2">
                Online Sessions
              </h3>
              <p className="text-gray-600 hidden md:block">
                Convenient virtual therapy sessions from the comfort of your
                home.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-assistant font-semibold text-gray-800 mb-2">
                {MobileText}
              </h3>
              <p className="text-gray-600 hidden md:block">
                Call today to schedule a free 15-minute consultation.
              </p>
            </div>
            <Phone className="w-16 h-16 text-teal-600 flex-shrink-0" />
          </div>
        </div>
      </div>

      <div class="md:w-1/2 w-full p-8 flex justify-center">
        <img
          src={lanaeImage}
          alt="Lanae Kimber"
          className="float-right ml-8 mb-4 w-96 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ServicesIntro;
