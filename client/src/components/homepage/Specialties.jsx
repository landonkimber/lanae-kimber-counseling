import ExpertiseTile from "/src/components/homepage/ExpertiseTile";
import ExpertiseTileMobile from "/src/components/homepage/ExpertiseTileMobile";

import ExpertiseCards from "/src/components/homepage/ExpertiseCards";
import ExpertiseCardsMobile from "/src/components/homepage/ExpertiseCardsMobile";

const Specialties = () => {
  const screenWidth = window.innerWidth;

  return (
    <div id="top-specialties" className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-sky-800 font-assistant text-left mb-4 select-none">
          Specializes in
        </h1>
        {/* Big Cards */}
        <div id="cardSection">
          {screenWidth < 1050 ? <ExpertiseCardsMobile /> : <ExpertiseCards />}
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
