import React from "react";
import { useSelector } from "react-redux";
import PizzaImg from "../images/pizza/pizza.png";
import PizzaPlateImg from "../images/pizza/pizza-plate.png";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

const Pizza = () => {
  const ingredients = useSelector((state) => state.ingredients);
  const pizza = useSelector((state) => state.pizza);
  const size = useSelector((state) => state.pizza.size);

  const scalePizzaSize = () => {
    if (size === "S") {
      return "s-size";
    } else if (size === "M") {
      return "m-size";
    } else if (size === "L") {
      return "l-size";
    }
  };

  const scaleIngredientsSize = () => {
    if (size === "S") {
      return "small";
    } else if (size === "M") {
      return "medium";
    } else if (size === "L") {
      return "large";
    }
  };
  return (
    <div className="pizza-wrapper">
      <div className="whole-pizza">
        <div className="ingredients-container">
          {ingredients.map((ingredient) => (
            <CSSTransition
              key={ingredient.name}
              in={ingredient.selected}
              timeout={800}
              classNames="zoomOut"
              unmountOnExit
            >
              <img
                className={`ingredients-image ${scaleIngredientsSize()} ${
                  ingredient.name
                } ${pizza.ready && "shrink-pizza"}`}
                src={ingredient.image}
                alt=""
              />
            </CSSTransition>
          ))}
        </div>
        <img
          className={`pizza ${scalePizzaSize()} ${
            pizza.ready && "shrink-pizza"
          }`}
          alt="Refresh your page..."
          src={PizzaImg}
        />
      </div>
      <img className="plate" alt="Refresh your page..." src={PizzaPlateImg} />
    </div>
  );
};

export default Pizza;
