import React from "react";
import Pizza from "./Pizza";
import Order from "./Order/Order";
import Size from "./Size";
import Menu from "./Menu";
import Leaves from "./Leaves";
import { useSelector } from "react-redux";

const HomePage = () => {
  const pizza = useSelector((state) => state.pizza);

  const activePizzaPrice = () => {
    let ingredientsPrice = 0;
    pizza.ingredients.map(
      (ingredient) =>
        ingredient.selected === true && (ingredientsPrice += ingredient.price)
    );
    return ingredientsPrice + pizza.price;
  };
  return (
    <div className="container">
      <Leaves />
      <h1>Stwórz swoją pizzę</h1>

      <div className="details">
        <Size />
        <h2 style={{ fontSize: "2rem" }}>${activePizzaPrice()}</h2>
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
