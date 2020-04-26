import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import pizzaReducer from "./pizzaReducer";

export default combineReducers({
  ingredients: ingredientsReducer,
  pizza: pizzaReducer,
});
