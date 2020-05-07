import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderList from "./OrderList";
import { addPizza } from "../../actions/orderActions";
import { resetPizza } from "../../actions/pizzaActions";

const Order = () => {
  const pizza = useSelector((state) => state.pizza);
  const orderedPizzas = useSelector((state) => state.order.orderedPizzas);
  const action = useDispatch();

  const getOrderPrice = () => {
    let ingredientsPrice = 0;
    let pizzaPrice = 0;
    orderedPizzas.map(
      (orderedPizza) =>
        (pizzaPrice += orderedPizza.price) &&
        orderedPizza.ingredients.map(
          (ingredient) =>
            ingredient.selected === true &&
            (ingredientsPrice += ingredient.price)
        )
    );
    return ingredientsPrice + pizzaPrice;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    action(addPizza(pizza));
    action(resetPizza());
  };

  return (
    <div className="order-section">
      <h2>TWOJE ZAMÓWIENIE</h2>
      <div className="summary">
        <OrderList />
        <div className="order-details">
          <button onClick={onSubmit}>DODAJ</button>
          <h2>CENA: ${getOrderPrice()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Order;
