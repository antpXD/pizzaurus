import { SELECT_SIZE, SET_ORDER } from "../actions/types";

const initialState = {
  size: "M",
  price: 15,
  ready: false,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SIZE:
      return {
        ...state,
        size: action.size,
        price: action.price,
      };
    case SET_ORDER:
      return {
        ...state,
        ready: !state.ready,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
