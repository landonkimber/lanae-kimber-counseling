import React, { useEffect, useState } from "react";

const ExpertiseTileMobile = () => {
  const [highlightedTile, setHighlightedTile] = useState(null);
  const tileIds = Array.from({ length: 16 }, (_, i) => `tile-${i + 1}`);

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
    <div className="grid grid-cols-2 mt-2">
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
      <div className={TileStyle("tile-5")} id="tile-5">
        Autism
      </div>
      <div className={TileStyle("tile-6")} id="tile-6">
        Coping Skills
      </div>
      <div className={TileStyle("tile-7")} id="tile-7">
        Depression
      </div>
      <div className={TileStyle("tile-8")} id="tile-8">
        Divorce
      </div>
      <div className={TileStyle("tile-9")} id="tile-9">
        Domestic Abuse
      </div>
      <div className={TileStyle("tile-10")} id="tile-10">
        Grief
      </div>
      <div className={TileStyle("tile-11")} id="tile-11">
        Life Coaching
      </div>
      <div className={TileStyle("tile-12")} id="tile-12">
        Parenting
      </div>
      <div className={TileStyle("tile-13")} id="tile-13">
        Self Esteem
      </div>
      <div className={TileStyle("tile-14")} id="tile-14">
        Transgender
      </div>
      <div className={TileStyle("tile-15")} id="tile-15">
        Trauma
      </div>
      <div className={TileStyle("tile-16")} id="tile-16">
        PTSD
      </div>
    </div>
  );
};

export default ExpertiseTileMobile;
