import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIngredient } from "../actions/ingriedientsActions";

const Menu = () => {
  const ingredients = useSelector((state) => state.ingredients);
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
        <text x="170" onClick={() => action(selectIngredient("pieczarki"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[0].selected && "black",
              fontSize: ingredients[0].selected ? "28px" : "26px",
            }}
          >
            PIECZARKI
          </textPath>
        </text>
        <text x="340" onClick={() => action(selectIngredient("oliwki"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[1].selected && "black",
              fontSize: ingredients[1].selected ? "28px" : "26px",
            }}
          >
            OLIWKI
          </textPath>
        </text>
        <text x="480" onClick={() => action(selectIngredient("pepperoni"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[2].selected && "black",
              fontSize: ingredients[2].selected ? "28px" : "26px",
            }}
          >
            PEPPERONI
          </textPath>
        </text>
        <text x="660" onClick={() => action(selectIngredient("pomidory"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[3].selected && "black",
              fontSize: ingredients[3].selected ? "28px" : "26px",
            }}
          >
            POMIDORY
          </textPath>
        </text>
        <text x="840" onClick={() => action(selectIngredient("chilli"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[4].selected && "black",
              fontSize: ingredients[4].selected ? "28px" : "26px",
            }}
          >
            CHILLI
          </textPath>
        </text>
        <text x="950" onClick={() => action(selectIngredient("bekon"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[5].selected && "black",
              fontSize: ingredients[5].selected ? "28px" : "26px",
            }}
          >
            BEKON
          </textPath>
        </text>
        <text x="1070" onClick={() => action(selectIngredient("cebula"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[6].selected && "black",
              fontSize: ingredients[6].selected ? "28px" : "26px",
            }}
          >
            CEBULA
          </textPath>
        </text>
        <text x="1210" onClick={() => action(selectIngredient("papryka"))}>
          <textPath
            xlinkHref="#curve"
            style={{
              fill: ingredients[7].selected && "black",
              fontSize: ingredients[7].selected ? "28px" : "26px",
            }}
          >
            PAPRYKA
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default Menu;
