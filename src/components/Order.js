import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrder } from "../actions/pizzaActions";
import pizzaPlateSmall from "../images/pizza/pizza-plate-small.png";

const Order = () => {
  const pizza = useSelector((state) => state.pizza);
  const ingredients = useSelector((state) => state.ingredients);
  const action = useDispatch();

  const totalPrice = () => {
    let ingredientsPrice = 0;
    ingredients.map(
      (ingredient) =>
        ingredient.selected === true && (ingredientsPrice += ingredient.price)
    );
    return ingredientsPrice + pizza.price;
  };

  return (
    <div className="order">
      <h2>CENA PIZZY</h2>
      <div className="summary">
        <h3>$ {totalPrice()}</h3>

        <img
          src={pizzaPlateSmall}
          alt=""
          className={`pizza-plate-small ${pizza.ready && "show-pizza"}`}
        />
      </div>
      <h2 className="add-to-order" onClick={() => action(setOrder())}>
        Dodaj do zamówienia
      </h2>
    </div>
  );
};

export default Order;
