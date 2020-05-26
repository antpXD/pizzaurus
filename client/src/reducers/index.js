import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import pizzaReducer from "./pizzaReducer";
import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";

export default combineReducers({
  pizza: pizzaReducer,
  cart: cartReducer,
  orders: ordersReducer,
  form: reduxFormReducer,
});
