import { SELECT_SIZE, SET_ORDER } from "./types";

export const selectSize = (size, price) => {
  return {
    type: SELECT_SIZE,
    size: size,
    price: price,
  };
};
export const setOrder = () => {
  return {
    type: SET_ORDER,
  };
};
