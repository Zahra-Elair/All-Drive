import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white py-3 border-b">
      <div className="flex items-center">
        <div className="text-2xl text-blue-500">All Drive</div>
        <div className="ml-auto">
          <div className="flex items-center space-x-6"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
