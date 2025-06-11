import { Link } from "react-router-dom";
import lanaeHeadshot from "/lanae-headshot.jpg";
import { Briefcase, School } from "lucide-react";

const AboutComponent = () => {
  return (
    <div id="about" className="bg-white pt-4 px-4 scroll-mt-32">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-sky-800 font-semi-bold mb-4 select-none">
          Are you ready to make a change?
        </h1>
        <div className="h-1 w-full bg-teal-600 mx-auto mt-4 mb-8"></div>

        <div className="relative w-full max-w-6xl mx-auto pb-8">
          <img
            src={lanaeHeadshot}
            alt="Image of Lanae Kimber"
            className="float-right ml-4 mb-4 w-32 sm:w-48 md:w-64 rounded-lg shadow-md"
          />

          <p className="text-xl text-gray-600 mb-4 font-assistant">
            Life doesn’t come with a roadmap — and when things feel overwhelming,
            it’s easy to lose direction. Whether you’re facing anxiety, feeling
            stuck, or struggling through a major life transition, you’re not
            alone. I work with people just like you who are trying to navigate
            difficult seasons of life and rediscover their inner strength.
          </p>

          <p className="text-xl text-gray-600 mb-4 font-assistant">
            The transitions we face may include divorce, job loss, parenting
            challenges, sobriety, coming out or exploring identity, grief, or
            stepping into adulthood. These moments can leave us feeling isolated,
            misunderstood, or unsure of where to turn. Therapy provides a safe
            place to be heard — and to heal.
          </p>

          <p className="text-xl text-gray-600 mb-4 font-assistant">
            I believe deeply in the power of connection and offer a warm,
            non-judgmental space where we can work together to uncover the
            patterns, emotions, and stories shaping your life. My approach is
            compassionate but direct — helping you make sense of where you’ve
            been while moving toward a more fulfilling future.
          </p>

          <p className="text-xl text-gray-600 mb-4 font-assistant">
            Whether you’re new to therapy or returning, I offer both in-person
            and online sessions that are tailored to fit your schedule and your
            needs. Most sessions run 60–90 minutes, and I’m available evenings and
            weekends. <strong>Let’s talk — your first 15-minute consultation is free.</strong>
          </p>

          <div className="bg-white p-6 mt-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">
              Education & Credentials
            </h2>
            <ul className="list-none list-inside space-y-2 text-lg text-gray-700">
              <li>
                <School className="inline mr-3 mb-1 text-teal-600" />
                Clinical Mental Health Counseling, University of Phoenix
              </li>
              <li>
                <Briefcase className="inline mr-3 mb-1 text-teal-600" />
                Over 14 Years in Professional Practice
              </li>
              <li>
                <Briefcase className="inline mr-3 mb-1 text-teal-600" />
                Specializes in Life Transitions, LGBTQ+ Support, and Women’s Issues
              </li>
            </ul>
          </div>
        </div>

        {/* <Link
          to="/contact"
          className="text-center bg-teal-500 self-center w-80 hover:bg-gray-50 hover:text-teal-500 text-white font-quicksand text-xl py-3 px-6 mt-12 rounded-md transition duration-300 ease-in-out"
        >
          Schedule a Free Consultation
        </Link> */}
      </div>
    </div>
  );
};

export default AboutComponent;
