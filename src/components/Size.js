import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSize } from "../actions/pizzaActions";

const Size = () => {
  const size = useSelector((state) => state.pizza.size);
  const action = useDispatch();

  return (
    <div className="size-section">
      <h2>WYBIERZ ROZMIAR</h2>
      <div className="circles">
        <div
          className={`circle ${size === "S" && "selected"}`}
          onClick={() => action(selectSize("S", 10))}
        >
          S
        </div>
        <div
          className={`circle ${size === "M" && "selected"}`}
          onClick={() => action(selectSize("M", 15))}
        >
          M
        </div>
        <div
          className={`circle ${size === "L" && "selected"}`}
          onClick={() => action(selectSize("L", 20))}
        >
          L
        </div>
      </div>
    </div>
  );
};

export default Size;
