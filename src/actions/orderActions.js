import { SET_LOADING, ADD_PIZZA, REMOVE_PIZZA } from "./types";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// add pizza to order
export const addPizza = (pizza) => {
  pizza.ready = true;
  pizza.id = new Date().valueOf();
  return {
    type: ADD_PIZZA,
    payload: pizza,
  };
};

export const removePizza = (orderedPizza) => {
  // orderedPizza.ready = false;
  return {
    type: REMOVE_PIZZA,
    payload: orderedPizza,
  };
};