import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import pizzaReducer from "./pizzaReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  pizza: pizzaReducer,
  order: orderReducer,
  form: reduxFormReducer,
});
