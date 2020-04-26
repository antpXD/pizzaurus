import React from "react";
import Pizza from "./Pizza";
import Order from "./Order";
import Size from "./Size";
import Menu from "./Menu";
import Leaves from "./Leaves";

const HomePage = () => {
  return (
    <div className="container">
      <Leaves />
      <h1>Stwórz swoją pizzę</h1>
      <div className="details">
        <Size />
        <Order />
      </div>
      <div className="pizza-menu">
        <Menu />
        <Pizza />
      </div>
    </div>
  );
};

export default HomePage;
