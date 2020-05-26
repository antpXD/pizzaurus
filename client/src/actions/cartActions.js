import {
  SET_LOADING,
  ADD_PIZZA,
  REMOVE_PIZZA,
  ADD_CUSTOMER,
  CLEAR_CART,
} from "./types";

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
export const addCustomer = (customer) => {
  return {
    type: ADD_CUSTOMER,
    payload: customer,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const removePizza = (pizzaInCart) => {
  return {
    type: REMOVE_PIZZA,
    payload: pizzaInCart,
  };
};
