import movingImage from "/moving.jpg";
import lgbtqImage from "/lgbtq.jpg";
import womanImage from "/woman.jpg";

const ExpertiseCards = () => {
  const cardStyle =
    "absolute bg-teal-400 p-4 lg:p-6 rounded-lg text-white shadow-sm transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:text-white hover:bg-white group hover:shadow-2xl hover:shadow-teal-50";

  return (
    <div
      id="specialties-cards"
      className="relative grid grid-cols-3 gap-4 lg:gap-8 min-h-[22rem] lg:min-h-[26rem]"
    >
      <div className="relative">
        <div className={cardStyle}>
          <h3 className="text-lg lg:text-xl font-semibold font-assitant mb-1 text-center select-none group-hover:text-teal-500 group-hover:font-bold">
            Life Transitions
          </h3>
          <div className="h-1 w-[33%] bg-teal-200 mx-auto mb-4 transition-colors duration-300 group-hover:bg-teal-400"></div>
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
          <h3 className="text-lg lg:text-xl font-semibold font-assistant mb-1 text-center select-none group-hover:text-teal-500 group-hover:font-bold">
            LGBTQ+
          </h3>
          <div className="h-1 w-[33%] bg-teal-200 mx-auto mb-4 transition-colors duration-300 group-hover:bg-teal-400"></div>
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
          <h3 className="text-lg lg:text-xl font-semibold font-assitant mb-1 text-center select-none group-hover:text-teal-500 group-hover:font-bold">
            Women's Issues
          </h3>
          <div className="h-1 w-[33%] bg-teal-200 mx-auto mb-4 transition-colors duration-300 group-hover:bg-teal-400"></div>
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

export default ExpertiseCards;
