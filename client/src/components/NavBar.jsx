import React from "react";
import { Home, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={`fixed top-0 w-full bg-teal-400 font-sans shadow-md h-28`}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-semibold text-white">
              Lanae Kimber
            </span>
          </div>

          {/* Nav Buttons*/}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex flex-col items-center text-white hover:text-teal-800 transition-colors"
            >
              <Home size={24} />
              <span className="text-sm">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center text-white hover:text-teal-800 transition-colors"
            >
              <User size={24} />
              <span className="text-sm">About</span>
            </Link>
            <Link
              to="/contact"
              className="flex flex-col items-center text-white hover:text-teal-800 transition-colors"
            >
              <MessageSquare size={24} />
              <span className="text-sm">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
