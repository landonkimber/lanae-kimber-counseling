import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-8 px-4 text-center flex flex-col items-center gap-4">
      <div className="text-left flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <FaPhone className="text-gray-300 w-4 h-4" />
          <span className="font-bold">(801)-920-6770</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-gray-300 w-4 h-4" />
          <a href="mailto:lkimber@lanaekimbercounseling.com" className="font-bold">lkimber@lanaekimbercounseling.com</a>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-300 w-4 h-4" />
          <span className="font-bold">Ogden, UT</span>
        </div>
      </div>

      <div className="bg-gray-300 h-1 w-1/2"></div>

      <div className="flex flex-row items-center">
        <p>&copy; 2024 Lanae Kimber Counseling. All rights reserved.</p>
        <div className="w-8 ml-4">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
