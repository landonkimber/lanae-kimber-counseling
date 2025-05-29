import React, { useEffect, useState } from "react";

const ExpertiseTile = () => {
  const [highlightedTile, setHighlightedTile] = useState(null);
  const tileIds = Array.from({ length: 22 }, (_, i) => `tile-${i + 1}`);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTile = tileIds[Math.floor(Math.random() * tileIds.length)];
      setHighlightedTile(randomTile);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const TileStyle = (id) =>
    `relative select-none font-bold text-center rounded-lg py-3 m-2 transition-all duration-1000 ease-in-out font-quicksand
    ${
      id === highlightedTile
        ? "bg-teal-500 text-white scale-110"
        : "bg-white text-gray-600 hover:scale-110 hover:bg-teal-500 hover:text-white"
    }`;

  return (
    <div>
      <div className="grid grid-cols-4 content-center align-bottom">
        <div className={TileStyle("tile-1")} id="tile-1">
          Addiction
        </div>
        <div className={TileStyle("tile-2")} id="tile-2">
          ADHD
        </div>
        <div className={TileStyle("tile-3")} id="tile-3">
          Adoption
        </div>
        <div className={TileStyle("tile-4")} id="tile-4">
          Anxiety
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className={TileStyle("tile-5")} id="tile-5">
          Autism
        </div>
        <div className={TileStyle("tile-6")} id="tile-6">
          Bisexual
        </div>
        <div className={TileStyle("tile-7")} id="tile-7">
          Borderline Personality
        </div>
        <div className={TileStyle("tile-8")} id="tile-8">
          Caregivers
        </div>
        <div className={TileStyle("tile-9")} id="tile-9">
          Coping Skills
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className={TileStyle("tile-10")} id="tile-10">
          Depression
        </div>
        <div className={TileStyle("tile-11")} id="tile-11">
          Divorce
        </div>
        <div className={TileStyle("tile-12")} id="tile-12">
          Domestic Abuse
        </div>
        <div className={TileStyle("tile-13")} id="tile-13">
          Family Conflict
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className={TileStyle("tile-14")} id="tile-14">
          Grief
        </div>
        <div className={TileStyle("tile-15")} id="tile-15">
          Lesbian
        </div>
        <div className={TileStyle("tile-16")} id="tile-16">
          Life Coaching
        </div>
        <div className={TileStyle("tile-17")} id="tile-17">
          Parenting
        </div>
        <div className={TileStyle("tile-18")} id="tile-18">
          Peer Relationships
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className={TileStyle("tile-19")} id="tile-19">
          Relationship Issues
        </div>
        <div className={TileStyle("tile-20")} id="tile-20">
          Self Esteem
        </div>
        <div className={TileStyle("tile-21")} id="tile-21">
          Transgender
        </div>
        <div className={TileStyle("tile-22")} id="tile-22">
          Trauma and PTSD
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTile;
