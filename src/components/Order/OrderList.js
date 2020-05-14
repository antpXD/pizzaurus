import React from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import OrderItem from "./OrderItem";
import PizzaIcon from "../../images/pizza/pizza-icon.png";
import { addPizzaAnimation } from "../../animations";

const OrderList = () => {
  const orderedPizzas = useSelector((state) => state.order.orderedPizzas);

  if (orderedPizzas !== null && orderedPizzas.length === 0) {
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
      {orderedPizzas.length > 0 &&
        orderedPizzas.map((orderedPizza) => (
          <CSSTransition
            key={orderedPizza.id}
            timeout={1000}
            appear
            mountOnEnter
            unmountOnExit
            in={orderedPizza.ready}
            addEndListener={(node, done) => {
              addPizzaAnimation(node, done, orderedPizza.ready);
              if (gsap.isTweening(".main-pizza")) {
                document.body.style.overflow = "hidden";
              }
            }}
          >
            <OrderItem orderedPizza={orderedPizza} />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

export default OrderList;
