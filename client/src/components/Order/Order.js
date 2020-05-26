import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderList from "./OrderList";
import logoBig from "../../images/logo/logo-big.png";
import gsap from "gsap";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Snackbar,
  useMediaQuery,
} from "@material-ui/core";
import { addPizza } from "../../actions/cartActions";
import { resetPizza } from "../../actions/pizzaActions";
import { getTotalPrice } from "../../helpers/price";

const Order = ({ scrollToCheckout }) => {
  const pizza = useSelector((state) => state.pizza);
  const pizzaListInCart = useSelector((state) => state.cart.pizzaListInCart);
  const action = useDispatch();

  const max1600px = useMediaQuery("(max-width:1600px)");
  const max890px = useMediaQuery("(max-width:890px)");
  const queueRef = useRef([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);
  const [expanded, setExpanded] = useState(false);

  const handleExpansionPanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const processQueue = () => {
    if (queueRef.current.length > 0) {
      setMessageInfo(queueRef.current.shift());
      setOpen(true);
    }
  };

  const handleClick = (message) => () => {
    queueRef.current.push({
      message,
      key: new Date().getTime(),
    });

    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      setOpen(false);
    } else {
      processQueue();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    processQueue();
  };

  const onSubmit = (e) => {
    if (
      gsap.isTweening(".main-pizza") ||
      gsap.isTweening(".mini-pizza-container")
    ) {
      return;
    } else {
      e.preventDefault();
      window.scrollTo(0, 0);
      action(addPizza(pizza));
      action(resetPizza());
    }
  };

  return (
    <div className="order-section">
      <ExpansionPanel
        expanded={expanded === "offerPanel" || max1600px === false}
        onChange={handleExpansionPanel("offerPanel")}
        defaultExpanded={true}
      >
        <ExpansionPanelSummary
          expandIcon={
            max1600px && (
              <i
                className="fas fa-chevron-down"
                style={{ fontSize: "0.99rem" }}
              />
            )
          }
          aria-controls="offerPanel-content"
          id="offerPanel-header"
        >
          {max890px ? (
            <Link to="/">
              <img alt="PIZZAURUS" src={logoBig} />
            </Link>
          ) : (
            <h2>TWOJE ZAMÓWIENIE</h2>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="summary">
            <OrderList />

            <div className="order-details">
              <button
                className="add"
                onClick={
                  pizzaListInCart.length > 5
                    ? handleClick("Możesz zamówić max. 6 pizz.")
                    : onSubmit
                }
              >
                DODAJ
              </button>
              <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="error"
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                onExited={handleExited}
                ContentProps={{
                  "aria-describedby": "message-id",
                }}
                message={
                  <span id="message-id">
                    {messageInfo ? messageInfo.message : undefined}
                  </span>
                }
                action={[
                  <i
                    key="close"
                    onClick={handleClose}
                    className="fas fa-times"
                    style={{ color: "#e9e9e9", pointer: "cursor" }}
                  />,
                ]}
              />

              <button
                className="confirm"
                id="confirmOrder"
                onClick={() => {
                  document.body.style.overflowY = "scroll";
                  document.body.style.overflowX = "hidden";
                  scrollToCheckout();
                }}
                disabled={pizzaListInCart.length > 0 ? false : true}
              >
                POTWIERDZ
              </button>
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <h2>CENA: ${getTotalPrice(pizzaListInCart)}</h2>
      {!expanded && <p className="helper-text">Rozwiń, aby dodać pizzę</p>}
    </div>
  );
};

export default Order;
