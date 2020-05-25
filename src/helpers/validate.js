export default function (values) {
  const errors = {};
  const requiredFields = ["city", "street", "house", "phone", "email"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "*Pole wymagane";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "*Niewłaściwy adres e-mail";
  }

  if (values.city && !/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/i.test(values.city)) {
    errors.city = "*Niewłaściwe miasto";
  }
  if (
    values.phone &&
    !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/i.test(values.phone)
  ) {
    errors.phone = "*Niewłaściwy nr telefonu";
  }
  if (values.datetimepicker === null) {
    values.datetimepicker = "Jak najszybciej";
  }
  return errors;
}
