import movingImage from "/moving.jpg";
import lgbtqImage from "/lgbtq.jpg";
import womanImage from "/woman.jpg";

const ExpertiseTileMobile = () => {
  const cardStyle =
    "absolute bg-teal-400 p-4 lg:p-6 rounded-lg text-white shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:text-white hover:bg-white group hover:shadow-2xl hover:shadow-teal-50";
  const fontStyle =
    "text-sm font-assistant lg:text-xl font-assitant font-bold mb-1 text-center select-none group-hover:text-teal-400 group-hover:font-bold";

  return (
    <div
      id="specialties-cards"
      className="relative grid grid-cols-3 gap-4 lg:gap-8 min-h-[15rem] lg:min-h-[26rem]"
    >
      <div className="relative">
        <div className={cardStyle}>
          <h3 className={fontStyle}>Life Transitions</h3>
          <div className="aspect-square">
            <img
              src={movingImage}
              alt="Life Transitions"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className={cardStyle}>
          <h3 className={fontStyle}>LGBTQ+</h3>
          <div className="aspect-square">
            <img
              src={lgbtqImage}
              alt="LGBTQ+"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className={cardStyle}>
          <h3 className={fontStyle}>Women's Issues</h3>
          <div className="aspect-square">
            <img
              src={womanImage}
              alt="Women's Issues"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTileMobile;
