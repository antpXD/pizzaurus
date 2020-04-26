import React from "react";
import logoBig from "../images/logo/logo-big.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img alt="PIZZAURUS" src={logoBig} />
      <div className="actions">
        <i className="far fa-heart" />
        <i className="fas fa-shopping-cart" />
      </div>
    </nav>
  );
};

export default Navbar;
