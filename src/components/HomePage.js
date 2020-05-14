import React, { useEffect } from "react";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import Pizza from "./Pizza";
import Order from "./Order/Order";
import Size from "./Size";
import Menu from "./Menu";
import Leaves from "./Leaves";
import Form from "./Checkout/Form";
import Cart from "./Checkout/Cart";

import { useSelector } from "react-redux";

// scroll to checkout

const HomePage = () => {
  const pizza = useSelector((state) => state.pizza);
  const orderedPizzas = useSelector((state) => state.order.orderedPizzas);

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const scrollToCheckout = () => {
    if (orderedPizzas.length > 0) {
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
        <h1>Stwórz swoją pizzę</h1>

        <div className="details">
          <Size />
          <h2 style={{ fontSize: "2rem" }}>${activePizzaPrice()}</h2>
          <Order scrollToCheckout={scrollToCheckout} />
        </div>

        <div className="pizza-menu">
          <Menu />
          <Pizza />
        </div>
      </Element>

      {orderedPizzas.length > 0 && (
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
