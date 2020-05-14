import {
  ADD_PIZZA,
  SET_LOADING,
  REMOVE_PIZZA,
  ADD_CUSTOMER,
} from "../actions/types";

const initialState = {
  customer: null,
  orderedPizzas: [],
  loading: false,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PIZZA:
      return {
        ...state,
        orderedPizzas: [...state.orderedPizzas, action.payload],
        loading: false,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
        loading: false,
      };
    case REMOVE_PIZZA:
      action.payload.ready = false;
      return {
        ...state,
        orderedPizzas: state.orderedPizzas.filter(
          (orderedPizza) => orderedPizza.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default pizzaReducer;
