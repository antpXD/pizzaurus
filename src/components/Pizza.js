import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PizzaImg from "../images/pizza/pizza.png";
import PizzaPlateImg from "../images/pizza/pizza-plate.png";

const Pizza = () => {
  const pizza = useSelector((state) => state.pizza);

  const scalePizzaSize = () => {
    if (pizza.size === "S") {
      return "s-pizza";
    } else if (pizza.size === "M") {
      return "m-pizza";
    } else if (pizza.size === "L") {
      return "l-pizza";
    }
  };

  const scaleIngredientsSize = () => {
    if (pizza.size === "S") {
      return "s-ingredients";
    } else if (pizza.size === "M") {
      return "m-ingredients";
    } else if (pizza.size === "L") {
      return "l-ingredients";
    }
  };

  return (
    <div className="pizza-wrapper">
      <div className="main-pizza">
        <div className={`ingredients-container ${scaleIngredientsSize()}`}>
          <TransitionGroup>
            {pizza.ingredients.map(
              (ingredient, index) =>
                ingredient.selected && (
                  <CSSTransition
                    key={index}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    in={ingredient.selected}
                    classNames="drop"
                  >
                    <img
                      className={`ingredients-image ${ingredient.name}`}
                      src={ingredient.image}
                      alt=""
                    />
                  </CSSTransition>
                )
            )}
          </TransitionGroup>
        </div>
        <img
          className={`pizza ${scalePizzaSize()} ${pizza.ready && "shrink"}`}
          alt="Refresh your page..."
          src={PizzaImg}
        />
      </div>
      <img className="plate" alt="Refresh your page..." src={PizzaPlateImg} />
    </div>
  );
};

export default Pizza;
