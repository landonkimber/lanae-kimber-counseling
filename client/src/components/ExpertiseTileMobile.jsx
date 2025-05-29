import React from "react";

const ExpertiseTileMobile = () => {
  const TileStyle =
    "text-center font-bold w-auto bg-gray-500 py-1 text-gray-600 rounded-lg mb-2 ml-1 mr-1 transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-600 hover:text-white select-none";
  return (
    <div className="grid grid-cols-2 mt-2">
      <div className={TileStyle}>Addiction</div>
      <div className={TileStyle}>ADHD</div>
      <div className={TileStyle}>Adoption</div>
      <div className={TileStyle}>Anxiety</div>
      <div className={TileStyle}>Autism</div>
      {/* <div className={TileStyle}>Bisexual</div> */}
      {/* <div className={TileStyle}>Borderline Personality</div> */}
      {/* <div className={TileStyle}>Caregivers</div> */}
      <div className={TileStyle}>Coping Skills</div>
      <div className={TileStyle}>Depression</div>
      <div className={TileStyle}>Divorce</div>
      <div className={TileStyle}>Domestic Abuse</div>
      {/* <div className={TileStyle}>Family Conflict</div> */}
      <div className={TileStyle}>Grief</div>
      {/* <div className={TileStyle}>Lesbian</div> */}
      <div className={TileStyle}>Life Coaching</div>
      <div className={TileStyle}>Parenting</div>
      {/* <div className={TileStyle}>Peer Relationships</div> */}
      {/* <div className={TileStyle}>Relationship Issues</div> */}
      <div className={TileStyle}>Self Esteem</div>
      <div className={TileStyle}>Transgender</div>
      <div className={TileStyle}>Trauma and PTSD</div>
    </div>
  );
};

export default ExpertiseTileMobile;
