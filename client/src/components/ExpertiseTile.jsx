import React from "react";

const ExpertiseTile = () => {
  const TileStyle =
    "select-none bg-white font-bold text-gray-600 text-center border border-gray-50 rounded-lg py-3 m-2 transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-600 hover:text-white select-none";
  return (
    <div>
      <div className="grid grid-cols-4  content-center align-bottom">
        <div className={TileStyle}>Addiction</div>
        <div className={TileStyle}>ADHD</div>
        <div className={TileStyle}>Adoption</div>
        <div className={TileStyle}>Anxiety</div>
      </div>

      <div className="grid grid-cols-5">
        <div className={TileStyle}>Autism</div>
        <div className={TileStyle}>Bisexual</div>
        <div className={TileStyle}>Borderline Personality</div>
        <div className={TileStyle}>Caregivers</div>
        <div className={TileStyle}>Coping Skills</div>
      </div>

      <div className="grid grid-cols-4">
        <div className={TileStyle}>Depression</div>
        <div className={TileStyle}>Divorce</div>
        <div className={TileStyle}>Domestic Abuse</div>
        <div className={TileStyle}>Family Conflict</div>
      </div>

      <div className="grid grid-cols-5">
        <div className={TileStyle}>Grief</div>
        <div className={TileStyle}>Lesbian</div>
        <div className={TileStyle}>Life Coaching</div>
        <div className={TileStyle}>Parenting</div>
        <div className={TileStyle}>Peer Relationships</div>
      </div>

      <div className="grid grid-cols-4">
        <div className={TileStyle}>Relationship Issues</div>
        <div className={TileStyle}>Self Esteem</div>
        <div className={TileStyle}>Transgender</div>
        <div className={TileStyle}>Trauma and PTSD</div>
      </div>
    </div>
  );
};

export default ExpertiseTile;
