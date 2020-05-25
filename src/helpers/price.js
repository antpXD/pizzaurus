export const getOrderedPizzaPrice = (pizzaInCart) => {
  let ingredientsPrice = 0;
  pizzaInCart.ingredients.map(
    (ingredient) =>
      ingredient.selected === true && (ingredientsPrice += ingredient.price)
  );
  return ingredientsPrice + pizzaInCart.price;
};

export const getTotalPrice = (pizzaListInCart) => {
  let ingredientsPrice = 0;
  let pizzaPrice = 0;
  pizzaListInCart.map(
    (pizzaInCart) =>
      (pizzaPrice += pizzaInCart.price) &&
      pizzaInCart.ingredients.map(
        (ingredient) =>
          ingredient.selected === true && (ingredientsPrice += ingredient.price)
      )
  );
  return ingredientsPrice + pizzaPrice;
};
