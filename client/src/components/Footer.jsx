import React from "react";
import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-8 px-4 text-center flex items-center justify-center gap-4">
      <p>&copy; 2024 Lanae Kimber Counseling. All rights reserved.</p>
      <div className="w-8">
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
