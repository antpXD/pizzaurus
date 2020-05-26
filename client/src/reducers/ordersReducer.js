import {
  ADD_ORDER,
  SET_LOADING,
  GET_ORDER,
  CLEAR_ORDER,
} from "../actions/types";

const initialState = {
  currentOrder: null,
  loading: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
        loading: false,
      };
    case GET_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
        loading: false,
      };
    case CLEAR_ORDER:
      return {
        ...state,
        currentOrder: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default ordersReducer;
