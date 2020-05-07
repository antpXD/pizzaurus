import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import OrderItem from "./OrderItem";
import PizzaIcon from "../../images/pizza/pizza-icon.png";
import { pizzaAnimation, emptyOrderAnimation } from "../../animations";

const OrderList = () => {
  const orderedPizzas = useSelector((state) => state.order.orderedPizzas);

  if (orderedPizzas !== null && orderedPizzas.length === 0) {
    return (
      <TransitionGroup>
        <CSSTransition
          classNames="zoomIn"
          timeout={1500}
          appear
          mountOnEnter
          unmountOnExit
          in={true}
          // addEndListener={(node, done) => emptyOrderAnimation(node, done)}
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
            addEndListener={(node, done) =>
              pizzaAnimation(node, done, orderedPizza.ready)
            }
          >
            <OrderItem orderedPizza={orderedPizza} />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

export default OrderList;
