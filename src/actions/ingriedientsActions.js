import { SELECT_INGREDIENT } from "./types";

export const selectIngredient = (name) => {
  return {
    type: SELECT_INGREDIENT,
    name: name,
  };
};
