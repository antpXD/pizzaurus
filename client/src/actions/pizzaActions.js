import { SELECT_INGREDIENT, SELECT_SIZE, RESET_PIZZA } from "./types";

export const selectIngredient = (name) => {
  return {
    type: SELECT_INGREDIENT,
    name: name,
  };
};

export const selectSize = (size, price) => {
  return {
    type: SELECT_SIZE,
    size: size,
    price: price,
  };
};

export const resetPizza = () => {
  return {
    type: RESET_PIZZA,
  };
};
