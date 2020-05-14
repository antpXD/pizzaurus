import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Leaves from "../Leaves";
import Form from "./Form";
import Cart from "./Cart";

const Checkout = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    console.log("no nie dziala");
  }, []);

  return (
    <Element name="scroll-to-checkout" className="checkout-container">
      <Leaves />
      <Form />
      <Cart />
    </Element>
  );
};

export default Checkout;
