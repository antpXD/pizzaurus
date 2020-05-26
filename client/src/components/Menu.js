import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIngredient } from "../actions/pizzaActions";
import { useMediaQuery } from "@material-ui/core";

const Menu = () => {
  const ingredients = useSelector((state) => state.pizza.ingredients);
  const action = useDispatch();
  const matches = useMediaQuery("(max-width:890px)");

  return (
    <div className="curved-text">
      <svg
        width={matches ? "1264" : "1300"}
        height={matches ? "666" : "630"}
        viewBox={matches ? "0 0 1264 666" : "0 0 1300 630"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            matches
              ? "M276.5 675.5C183 476.5 367.479 123.528 680.009 160.681C952.129 193.031 1094.24 519.719 937.895 708.123"
              : "M180 621C180 560.277 229.085 165 647.375 165C1003.18 165 1111 476.643 1111 621"
          }
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
