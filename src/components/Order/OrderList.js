import React from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import OrderItem from "./OrderItem";
import PizzaIcon from "../../images/pizza/pizza-icon.png";
import {
  addPizzaAnimationOnBigScreen,
  addPizzaAnimationOnSmallScreen,
} from "../../animations";
import { useMediaQuery } from "@material-ui/core";

const OrderList = () => {
  const pizzaListInCart = useSelector((state) => state.cart.pizzaListInCart);

  const max890px = useMediaQuery("(max-width:890px)");

  if (pizzaListInCart !== null && pizzaListInCart.length === 0) {
    return (
      <TransitionGroup>
        <CSSTransition
          classNames="fadeIn"
          timeout={1500}
          appear
          mountOnEnter
          unmountOnExit
          in={true}
        >
          <div className="order-empty">
            <p>Zamów swoją ulubioną picke!</p>
            <img src={PizzaIcon} alt="" />
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  return (
    <TransitionGroup className="order-list">
      {pizzaListInCart.length > 0 &&
        pizzaListInCart.map((pizzaInCart) => (
          <CSSTransition
            key={pizzaInCart.id}
            timeout={1000}
            appear
            mountOnEnter
            unmountOnExit
            in={pizzaInCart.ready}
            addEndListener={(node, done) => {
              !max890px
                ? addPizzaAnimationOnBigScreen(node, done, pizzaInCart.ready)
                : addPizzaAnimationOnSmallScreen(node, done, pizzaInCart.ready);
              if (gsap.isTweening(".main-pizza")) {
                document.body.style.overflow = "hidden";
                document.querySelector("#confirmOrder").disabled = true;
              }
            }}
          >
            <OrderItem pizzaInCart={pizzaInCart} />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

export default OrderList;
