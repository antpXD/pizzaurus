import React from "react";
import MomentUtils from "@date-io/moment";
import { useSelector, useDispatch } from "react-redux";
import { addCustomer } from "../../actions/orderActions";
import { Field, reduxForm } from "redux-form";
import validate from "../../helpers/validate";
import { TextField } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

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

const Form = () => {
  const form = useSelector((state) => state.form);
  const action = useDispatch();
  console.log(form.Form.values);

  const onSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    action(addCustomer(form.Form.values));
    // action(resetPizza());
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
              <div className="box box--active" style={{ maxWidth: 320 }}>
                <CheckSVG />
                <p>Jak najszybciej</p>
              </div>
              <div
                className="box"
                style={{ maxWidth: 320, pointerEvents: "none" }}
              >
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
                <p style={{ fontSize: 14, paddingLeft: 80 }}>
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
              <Field name="phone" component={renderTextField} label="Phone" />
              <Field name="email" component={renderTextField} label="E-mail" />
            </div>
          </div>
        </div>

        <div className="step">
          <MoneySVG />
          <div className="content">
            <h3>Informacje o płatności</h3>
            <h5>Dodaj kartę</h5>
            <div className="inputs">
              <div className="box" style={{ width: "100%" }}>
                <p>Zapłać</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={onSubmit}>Zamawiam</button>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default reduxForm({
  form: "Form",
  validate,
})(Form);
