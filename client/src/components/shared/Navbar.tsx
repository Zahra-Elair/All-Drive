import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-white py-2">
      <div className="container text-sm gap-6 flex">
        <Link className="hover:underline" to="/">
          My Drive
        </Link>
        <Link className="hover:underline" to="/">
          Login
        </Link>
        <Link className="hover:underline" to="/">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
