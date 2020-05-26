import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import deliveryImg from "../images/success/delivery.png";
import { getOrder } from "../actions/ordersActions";

const Success = ({ match }) => {
  const action = useDispatch();
  const currentOrder = useSelector((state) => state.orders.currentOrder);
  //env wstawic, zamiast hard coded
  useEffect(() => {
    window.scrollTo(0, 0);
    action(getOrder(match.params.id));
    console.log(process.env.REACT_APP_PUBLISHABLE_KEY);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="success-page">
      <h1>Złożyłeś zamówienie!</h1>
      <img alt="Dostawa" src={deliveryImg} />

      <div className="order-container">
        {currentOrder &&
          currentOrder.pizzaListInCart.map((pizzaInCart, index) => (
            <div key={index} className="product-item">
              <div className="details">
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
            </div>
          ))}
      </div>
      <p className="delivery-time">
        Zamówienie przyjedzie do ciebie w przeciągu 20 minut.
      </p>
    </div>
  );
};

export default Success;
