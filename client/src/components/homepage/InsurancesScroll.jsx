import React from "react";

import Aetna from "/insurances/aetna.png";
import Anthem from "/insurances/anthem.svg";
import BCBSUtah from "/insurances/regence-bluecross-utah.jpg";
import Horizon from "/insurances/horizon.jpg";
import BCBSMassachusetts from "/insurances/bcbs-massachusetts.jpeg";
import Cigna from "/insurances/cigna.png";
import Carelon from "/insurances/carelon.jpg";

const logos = [
  Aetna,
  Anthem,
  BCBSUtah,
  Horizon,
  BCBSMassachusetts,
  Cigna,
  Carelon,
];

const InsurancesScroll = () => {
  return (
    <div className="relative overflow-hidden bg-white w-full h-32 shadow-md">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Logo track */}
      <div className="whitespace-nowrap animate-scroll flex items-center h-full gap-8 px-8">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 w-36">
            <img
              src={logo}
              alt={`Insurance Logo ${idx}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancesScroll;
