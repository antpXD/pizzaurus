import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import Pizza from "./Pizza";
import Order from "./Order/Order";
import Size from "./Size";
import Menu from "./Menu";
import Leaves from "./Leaves";
import Form from "./Checkout/Form";
import Cart from "./Checkout/Cart";
import { clearCurrentOrder } from "../actions/ordersActions";

import { useMediaQuery } from "@material-ui/core";

// scroll to checkout

const HomePage = () => {
  const pizza = useSelector((state) => state.pizza);
  const cart = useSelector((state) => state.cart);
  const pizzaListInCart = useSelector((state) => state.cart.pizzaListInCart);
  const action = useDispatch();
  const max890px = useMediaQuery("(max-width:890px)");
  const min890px = useMediaQuery("(min-width:891px)");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    action(clearCurrentOrder());
    cart.id = uuidv4();
    // eslint-disable-next-line
  }, []);

  const scrollToCheckout = () => {
    if (pizzaListInCart.length > 0) {
      scroller.scrollTo("scroll-to-checkout", {
        duration: 800,
        delay: 0,
      });
    }
  };

  const activePizzaPrice = () => {
    let ingredientsPrice = 0;
    pizza.ingredients.map(
      (ingredient) =>
        ingredient.selected === true && (ingredientsPrice += ingredient.price)
    );
    return ingredientsPrice + pizza.price;
  };

  return (
    <>
      <Element className="home-container" name="scroll-to-home">
        <Leaves />
        <div className="pizza-menu">
          <Menu />
          <Pizza />
        </div>
        <h1>Stwórz swoją pizzę</h1>
        <div className="details">
          <Size />
          <h2 className="pizza-price">${activePizzaPrice()}</h2>

          <Order scrollToCheckout={scrollToCheckout} />
        </div>
      </Element>

      {pizzaListInCart.length > 0 && (
        <Element name="scroll-to-checkout">
          <div className="checkout-section">
            <Leaves />
            <Form />
            <Cart />
          </div>
        </Element>
      )}
    </>
  );
};

export default HomePage;
