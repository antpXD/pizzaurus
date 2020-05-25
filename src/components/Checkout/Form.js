import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import MomentUtils from "@date-io/moment";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import validate from "../../helpers/validate";
import { addCustomer, clearCart } from "../../actions/cartActions";
import { addOrder } from "../../actions/ordersActions";
import { resetPizza } from "../../actions/pizzaActions";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TextField, CircularProgress } from "@material-ui/core";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { getTotalPrice } from "../../helpers/price";

import { ReactComponent as LocationSVG } from "../../images/svg/location.svg";
import { ReactComponent as MoneySVG } from "../../images/svg/money.svg";
import { ReactComponent as UserSVG } from "../../images/svg/user.svg";
import { ReactComponent as ClockSVG } from "../../images/svg/clock.svg";
import { ReactComponent as CheckSVG } from "../../images/svg/check.svg";

const renderTextField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    {...input}
    {...custom}
    variant="filled"
    helperText={touched && error}
    InputProps={{ disableUnderline: true }}
    error={touched && invalid}
  />
);

// const renderDateTimePicker = ({
//   input: { onChange, value },
//   label,
//   showTime,
//   meta: { touched, error },
//   ...custom
// }) => {
//   return (
//     <DateTimePicker
//       label={label}
//       onChange={onChange}
//       value={!value ? null : new Date(value)}
//       format="DD/MM/YYYY HH:mm"
//       ampm={false}
//       emptyLabel="Jak najszybciej"
//       autoOk
//       showTodayButton
//       disablePast
//       // disableFuture
//       animateYearScrolling
//       {...custom}
//     />
//   );
// };

const cardElementOptions = {
  style: {
    base: {
      fontFamily: "Quicksand, Roboto, sans-serif",
      fontWeight: "500",
      fontSize: "16px",
    },
    invalid: {
      color: "#ff5959",
      iconColor: "#ff5959",
    },
  },

  hidePostalCode: true,
};

const Form = () => {
  const cart = useSelector((state) => state.cart);
  const customer = useSelector((state) => state.form.Form.values);
  const formErrors = useSelector((state) => state.form.Form.syncErrors);
  const action = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const totalPrice = getTotalPrice(cart.pizzaListInCart) * 100;

  //debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      action(addCustomer(customer));
    }, 500);
    return () => {
      clearTimeout(handler);
    };
    //eslint-disable-next-line
  }, [customer]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      email: customer.email,
      phone: customer.phone,
      address: {
        city: customer.city,
        line1: customer.street,
        line2: customer.house,
      },
    };

    setIsProcessing(true);
    try {
      const { data: clientSecret } = await axios.post(
        "http://localhost:5000/payment",
        {
          amount: totalPrice,
          currency: "usd",
        }
      );
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setIsProcessing(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setIsProcessing(false);
        return;
      }
      // add error handling
      action(addOrder(cart));
      setIsProcessing(false);
      action(clearCart());
      action(resetPizza());
      history.push(`/success/${cart.id}`);
    } catch (error) {
      setCheckoutError(error);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="checkout-form">
        <h1>Podsumowanie zamówienia</h1>
        <div className="step">
          <LocationSVG />
          <div className="content">
            <h3>Lokalizacja dostawy</h3>
            <h5>Określ dokładny adres dostawy</h5>
            <div className="inputs">
              <Field
                name="city"
                component={renderTextField}
                label="Miejscowość"
              />
              <Field name="street" component={renderTextField} label="Ulica" />
              <Field
                name="house"
                component={renderTextField}
                label="Nr bloku/mieszkania"
              />
            </div>
          </div>
        </div>

        <div className="step">
          <ClockSVG />
          <div className="content">
            <h3>Czas dostawy</h3>
            <h5>O której zamówienie ma być dostarczone</h5>
            <div className="inputs">
              <div className="box box--active">
                <CheckSVG />
                <p>Jak najszybciej</p>
              </div>
              <div className="box" style={{ pointerEvents: "none" }}>
                <CheckSVG />
                {/* <Field
                  name="datetimepicker"
                  component={renderDateTimePicker}
                  label="Data i godzina"
                  style={{
                    width: 130,
                    marginRight: 30,
                    marginLeft: 60,
                    cursor: "pointer",
                  }}
                /> */}
                <p style={{ fontSize: 14, paddingLeft: 30 }}>
                  Wkrótce będzie można zaplanować zamówienie
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="step">
          <UserSVG />
          <div className="content">
            <h3>Dane kontaktowe</h3>
            <h5>Podaj telefon oraz e-mail</h5>
            <div className="inputs">
              <Field
                name="phone"
                component={renderTextField}
                label="Nr telefonu"
              />
              <Field name="email" component={renderTextField} label="E-mail" />
            </div>
          </div>
        </div>

        <div className="step">
          <MoneySVG />
          <div className="content">
            <h3>Informacje o płatności</h3>
            <h5>
              Wpisz testową kartę: 4242 4242 4242 4242. MM / RR: 04/22. CV: 222
            </h5>
            <div className="inputs" style={{ flexDirection: "column" }}>
              <div
                className="box"
                style={
                  checkoutError
                    ? {
                        border: "1px solid red",
                        backgroundColor: "#fff0f0",
                        width: "100%",
                      }
                    : { width: "100%" }
                }
              >
                <CardElement options={cardElementOptions} />
              </div>
              {checkoutError && (
                <p className="hint">Podano niewłaściwą kartę.</p>
              )}
            </div>
          </div>
        </div>
        <div className="step step--button">
          <button
            onClick={onSubmit}
            disabled={formErrors || isProcessing ? true : false}
          >
            {isProcessing ? "Przetwarzanie..." : "Zamawiam"}
            {isProcessing && <CircularProgress size={20} />}
          </button>
          <span className="hint">
            {formErrors && "* Wypełnij wymagane pola"}
          </span>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default reduxForm({
  form: "Form",
  validate,
})(Form);
