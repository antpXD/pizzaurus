import React from "react";
import { useSelector } from "react-redux";
import { getOrderedPizzaPrice } from "../../helpers/functions";

const Cart = () => {
  const orderedPizzas = useSelector((state) => state.order.orderedPizzas);

  const getTotalPrice = () => {
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

  return (
    <div className="cart">
      <h1>Twój koszyk</h1>
      <div className="product-container">
        {orderedPizzas.map((orderedPizza, index) => (
          <div key={index} className="product-item">
            <div className="details">
              <div className="quantity">
                <i className="fas fa-chevron-up" />
                {orderedPizza.quantity}x
                <i className="fas fa-chevron-down" />
              </div>
              <div className="pizza">
                <span className="size">
                  {orderedPizza.size === "S"
                    ? "Mała pizza z:"
                    : orderedPizza.size === "M"
                    ? "Średnia pizza z:"
                    : "Giga pizza z:"}
                </span>
                <div className="ingredients">
                  {orderedPizza.ingredients.filter(
                    (ingredient) => ingredient.selected
                  ).length > 0 ? (
                    orderedPizza.ingredients.map(
                      (ingredient, index) =>
                        ingredient.selected && (
                          <span key={index} className="item">
                            {ingredient.name},{" "}
                          </span>
                        )
                    )
                  ) : (
                    <span>niczym</span>
                  )}
                </div>
              </div>
            </div>
            <div className="price">$ {getOrderedPizzaPrice(orderedPizza)}</div>
          </div>
        ))}

        <div className="total-price">
          <span>Cena zamówienia:</span>
          <span>$ {getTotalPrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
