import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { removePizza } from "../../actions/orderActions";
import { getOrderedPizzaPrice } from "../../helpers/functions";

import PizzaImg from "../../images/pizza/pizza.png";
import PizzaPlateImg from "../../images/pizza/pizza-plate.png";

const OrderItem = ({ orderedPizza }) => {
  const action = useDispatch();

  const scalePizzaSize = () => {
    if (orderedPizza.size === "S") {
      return "s-pizza";
    } else if (orderedPizza.size === "M") {
      return "m-pizza";
    } else if (orderedPizza.size === "L") {
      return "l-pizza";
    }
  };

  return (
    <div className="mini-pizza-container">
      <div
        className="mini-pizza-wrapper"
        onClick={() => {
          window.scrollTo(0, 0);
          action(removePizza(orderedPizza));
        }}
      >
        <div className="ingredients-container">
          {orderedPizza.ingredients.map(
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
          <h4>Size: {orderedPizza.size}</h4>
          <h4>Price: ${getOrderedPizzaPrice(orderedPizza)}</h4>
        </div>
        <h4 style={{ paddingTop: "5px" }}>Składniki: </h4>
        <p className="ingredients-list">
          {orderedPizza.ingredients.map(
            (ingredient, index) =>
              ingredient.selected && (
                <span key={index}>{ingredient.name} | </span>
              )
          )}
          {orderedPizza.ingredients.length === 0 && <span>Brak</span>}
        </p>
      </div>
      <p className="price">${getOrderedPizzaPrice(orderedPizza)}</p>
    </div>
  );
};

OrderItem.propTypes = {
  orderedPizza: PropTypes.object.isRequired,
};

export default OrderItem;
