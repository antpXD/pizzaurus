import React from "react";
import { Link } from "react-router-dom";
import logoBig from "../images/logo/logo-big.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img alt="PIZZAURUS" src={logoBig} />
      </Link>
    </nav>
  );
};

export default Navbar;
