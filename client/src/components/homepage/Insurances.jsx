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

const Insurances = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6">
        {logos.map((logo, idx) => (
          <div key={idx} className="w-32 sm:w-36 md:w-40 lg:w-44 p-2">
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

export default Insurances;
