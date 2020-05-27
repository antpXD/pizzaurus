import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Success from "./components/Success";

import "./style/App.scss";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_YJLjuyV6yDha7pfYx9ggIEQN00L2IPKT18");

function App() {
  const location = useLocation();
  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <>
          <div className="in-progress">app still in progress</div>
          <Navbar />
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              timeout={500}
              classNames="page"
            >
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route path="/success/:id" component={Success} />
                {/* <Route render={() => <NotFound />} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </>
      </Provider>
    </Elements>
  );
}

export default App;
