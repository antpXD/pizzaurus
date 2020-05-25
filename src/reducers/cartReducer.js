import { v4 as uuidv4 } from "uuid";
import {
  ADD_PIZZA,
  CLEAR_CART,
  REMOVE_PIZZA,
  ADD_CUSTOMER,
} from "../actions/types";

const initialState = {
  id: null,
  customer: null,
  pizzaListInCart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzaListInCart: [...state.pizzaListInCart, action.payload],
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        id: null,
        customer: null,
        pizzaListInCart: [],
      };
    case REMOVE_PIZZA:
      action.payload.ready = false;
      return {
        ...state,
        pizzaListInCart: state.pizzaListInCart.filter(
          (pizzaInCart) => pizzaInCart.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
