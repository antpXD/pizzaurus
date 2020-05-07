import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  pizza: pizzaReducer,
  order: orderReducer,
});
