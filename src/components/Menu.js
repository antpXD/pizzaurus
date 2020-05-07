import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIngredient } from "../actions/pizzaActions";

const Menu = () => {
  const ingredients = useSelector((state) => state.pizza.ingredients);
  const action = useDispatch();

  return (
    <div className="curved-text">
      <svg
        width="1128"
        height="568"
        viewBox="0 0 1128 568"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M78 566C78 502.215 129.194 87 565.456 87C936.548 87 1049 414.362 1049 566"
          stroke="#707070"
          fill="transparent"
          strokeWidth="1"
          id="curve"
        />
        {ingredients.map((ingredient, index) => (
          <text
            x={ingredient.pathPosition}
            key={index}
            onClick={() => action(selectIngredient(ingredient.name))}
          >
            <textPath
              xlinkHref="#curve"
              style={{
                fill: ingredient.selected && "black",
                fontSize: ingredient.selected ? "28px" : "26px",
              }}
            >
              {ingredient.name}
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
};
export default Menu;
