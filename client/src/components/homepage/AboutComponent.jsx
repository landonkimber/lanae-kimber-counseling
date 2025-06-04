import { Link } from "react-router-dom";
import lanaeHeadshot from "/lanae-headshot.jpg";

const AboutComponent = () => {
  return (
    <div id="home" className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-sky-800 font-semi-bold mb-4 select-none">
          Are you ready to make a change?
        </h1>{" "}
        <div className="h-1 w-full bg-teal-600 mx-auto mt-4 mb-8"></div>
        <div className="relative w-full max-w-6xl mx-auto pb-8">
          <img
            src={lanaeHeadshot}
            alt="Image of Lanae Kimber"
            className="float-right ml-4 mb-4 w-32 sm:w-48 md:w-64 rounded-lg"
          />
          <p className="text-xl text-gray-600 mb-4">
            Today's world can be overwhelming and lonely. With so much change
            happening around us it can create a feeling of being stuck, anxiety
            and/or depression. These changes are difficult and can lead to
            feelings of isolation without assistance. <br /> <br /> These
            transitions may include divorce, job loss, reentering the work
            force, becoming a teenager or adult, leaving or changing your
            religion, moving, new relationship, parenting, losing a loved one,
            sobriety, exploring gender identity/sexuality and more. If you want
            to feel empowered, now is the time to take action. I'd love to get
            you there!
          </p>
        </div>
        <Link
          to="/contact"
          className="text-center bg-teal-500 self-center w-96 content hover:bg-gray-50 hover:text-teal-500 text-white font-quicksand text-3xl py-4 px-6 mt-18 py-2 rounded-md"
        >
          Schedule Consultation
        </Link>
      </div>
    </div>
  );
};

export default AboutComponent;
