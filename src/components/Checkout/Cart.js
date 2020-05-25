import React from "react";
import { useSelector } from "react-redux";
import { getOrderedPizzaPrice, getTotalPrice } from "../../helpers/price";

const Cart = () => {
  const pizzaListInCart = useSelector((state) => state.cart.pizzaListInCart);

  return (
    <div className="cart">
      <h1>Twój koszyk</h1>
      <div className="product-container">
        {pizzaListInCart.map((pizzaInCart, index) => (
          <div key={index} className="product-item">
            <div className="details">
              <div className="quantity">
                <i className="fas fa-chevron-up" />
                {pizzaInCart.quantity}x
                <i className="fas fa-chevron-down" />
              </div>
              <div className="pizza">
                <span className="size">
                  {pizzaInCart.size === "S"
                    ? "Mała pizza z:"
                    : pizzaInCart.size === "M"
                    ? "Średnia pizza z:"
                    : "Giga pizza z:"}
                </span>
                <div className="ingredients">
                  {pizzaInCart.ingredients.filter(
                    (ingredient) => ingredient.selected
                  ).length > 0 ? (
                    pizzaInCart.ingredients.map(
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
            <div className="price">$ {getOrderedPizzaPrice(pizzaInCart)}</div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <span>Cena zamówienia:</span>
        <span>$ {getTotalPrice(pizzaListInCart)}</span>
      </div>
    </div>
  );
};

export default Cart;
