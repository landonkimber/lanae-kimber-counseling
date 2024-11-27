import React, { useState } from "react";
import { Home, User, MessageSquare, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full flex justify-center content-center bg-teal-400 font-sans h-28 z-10 shadow-md">
      <div className="absolute z-30 container mx-auto px-4 h-full bg-teal-400 ">
        <div className=" flex items-center justify-between h-full bg-teal-400 z-30 relative">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 bg-teal-400">
            <div className="w-20 h-20">
              <Logo />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white ml-4 lg:ml-16">
              Lanae Kimber Counseling
            </h1>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-teal-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="flex flex-col items-center text-white hover:text-teal-700 transition-colors"
            >
              <Home size={28} />
              <span className="text-sm font-bold">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex flex-col items-center text-white hover:text-teal-700 transition-colors"
            >
              <User size={28} />
              <span className="text-sm font-bold">About</span>
            </Link>
            <Link
              to="/contact"
              className="flex flex-col items-center text-white hover:text-teal-700 transition-colors"
            >
              <MessageSquare size={28} />
              <span className="text-sm font-bold">Contact</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            relative
            lg:hidden 
            bg-white 
            w-[70%]
            right-[-29%]
            transition-all duration-500
            z-index-10
            rounded-b-md
            ${isMenuOpen ? "top-0" : "-top-96"}
          `}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="flex px-12 py-2 items-center gap-2 text-teal-400 hover:text-teal-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={24} />
              <span ml-5>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex px-12 py-2items-center gap-2 text-teal-400 hover:text-teal-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={24} />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex px-12 py-2 items-center gap-2 text-teal-400 hover:text-teal-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={24} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
