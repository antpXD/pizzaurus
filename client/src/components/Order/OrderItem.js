import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { removePizza } from "../../actions/cartActions";
import { getOrderedPizzaPrice } from "../../helpers/price";

import PizzaImg from "../../images/pizza/pizza.png";
import PizzaPlateImg from "../../images/pizza/pizza-plate.png";

const OrderItem = ({ pizzaInCart }) => {
  const action = useDispatch();

  const scalePizzaSize = () => {
    if (pizzaInCart.size === "S") {
      return "s-pizza";
    } else if (pizzaInCart.size === "M") {
      return "m-pizza";
    } else if (pizzaInCart.size === "L") {
      return "l-pizza";
    }
  };

  return (
    <div className="mini-pizza-container">
      <div
        className="mini-pizza-wrapper"
        onClick={() => {
          window.scrollTo(0, 0);
          action(removePizza(pizzaInCart));
        }}
      >
        <div className="ingredients-container">
          {pizzaInCart.ingredients.map(
            (ingredient) =>
              ingredient.selected && (
                <img
                  key={ingredient.name}
                  className={`ingredients-image ${ingredient.name}`}
                  src={ingredient.image}
                  alt=""
                />
              )
          )}
        </div>
        <img
          className={`pizza ${scalePizzaSize()}`}
          alt="Refresh your page..."
          src={PizzaImg}
        />
        <img className="plate" alt="Refresh your page..." src={PizzaPlateImg} />
        <div className="overlay">
          <div className="delete">X</div>
        </div>
      </div>
      <div className="tooltip">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Size: {pizzaInCart.size}</h4>
          <h4>Price: ${getOrderedPizzaPrice(pizzaInCart)}</h4>
        </div>
        <h4 style={{ paddingTop: "5px" }}>Składniki: </h4>
        <p className="ingredients-list">
          {pizzaInCart.ingredients.map(
            (ingredient, index) =>
              ingredient.selected && (
                <span key={index}>{ingredient.name} | </span>
              )
          )}
          {pizzaInCart.ingredients.length === 0 && <span>Brak</span>}
        </p>
      </div>
      <p className="price">${getOrderedPizzaPrice(pizzaInCart)}</p>
    </div>
  );
};

OrderItem.propTypes = {
  pizzaInCart: PropTypes.object.isRequired,
};

export default OrderItem;
