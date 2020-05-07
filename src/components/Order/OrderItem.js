import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removePizza } from "../../actions/orderActions";

import PizzaImg from "../../images/pizza/pizza.png";
import PizzaPlateImg from "../../images/pizza/pizza-plate.png";

const OrderItem = ({ orderedPizza }) => {
  const action = useDispatch();

  const getOrderedPizzaPrice = () => {
    let ingredientsPrice = 0;
    orderedPizza.ingredients.map(
      (ingredient) =>
        ingredient.selected === true && (ingredientsPrice += ingredient.price)
    );
    return ingredientsPrice + orderedPizza.price;
  };

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
        onClick={() => action(removePizza(orderedPizza))}
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
      </div>
      <p className="price">${getOrderedPizzaPrice()}</p>
    </div>
  );
};

OrderItem.propTypes = {
  orderedPizza: PropTypes.object.isRequired,
};

export default OrderItem;
