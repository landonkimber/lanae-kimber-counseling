import { useEffect, useState } from "react";
import { Calendar, Computer, Laptop, MessageCircle, Phone } from "lucide-react";
import lanaeImage from "/lanae.jpg";

const ServicesIntro = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MobileText = isMobile
    ? "Free 15 Minute Consultation"
    : "Free Consultation";
  const MobileView = isMobile ? "w-2/3 p-2" : "w-1/2 p-4";

  return (
    <div
      id="home-intro"
      className="flex flex-row mx-auto max-w-6xl w-full bg-grey-50 items-center"
    >
      <div className={MobileView}>
        {isMobile ? (
          <>
            <div className="w-full p-2 bg-gray-100 shadow-md flex flex-col rounded-lg mb-2 justify-center items-center text-center">
              <MessageCircle className="w-12 h-12 text-teal-600" />
              <h3 className="text-md font-assistant font-semibold text-gray-800">
                Individual Therapy
              </h3>
            </div>
            <div className="w-full p-2 bg-gray-100 shadow-md flex flex-col rounded-lg mb-2 justify-center items-center text-center">
              <Phone className="w-12 h-12 text-teal-600" />
              <h3 className="text-md font-assistant font-semibold text-gray-800">
                Online Sessions
              </h3>
            </div>
            <div className="w-full p-2 bg-gray-100 shadow-md flex flex-col rounded-lg mb-2 justify-center items-center text-center">
              <Laptop className="w-12 h-12 text-teal-600" />
              <h3 className="text-md font-assistant font-semibold text-gray-800">
                {MobileText}
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-6 mb-2 shadow-md rounded-lg flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-assistant font-semibold text-gray-800 mb-2">
                  Individual Therapy
                </h3>
                <p className="text-gray-600 hidden md:block">
                  One-on-one sessions focused on your personal growth and
                  well-being.
                </p>
              </div>
              <MessageCircle className="md:w-16 md:h-16 lg:w-20 lg:h-20  text-teal-600" />
            </div>
            <div className="bg-white p-6 mb-2 shadow-md  rounded-lg flex items-center justify-between gap-6">
              <Laptop className="md:w-16 md:h-16 lg:w-20 lg:h-20 text-teal-600" />
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
            <div className="bg-white p-6 mb-2 shadow-md rounded-lg flex items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-assistant font-semibold text-gray-800 mb-2">
                  {MobileText}
                </h3>
                <p className="text-gray-600 hidden md:block">
                  Call today to schedule a free 15-minute consultation.
                </p>
              </div>
              <Phone className="md:w-16 md:h-16 lg:w-20 lg:h-20  text-teal-600" />
            </div>
          </>
        )}
      </div>

      <div className="w-auto p-1 flex justify-center">
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
