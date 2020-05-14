export const getOrderedPizzaPrice = (orderedPizza) => {
  let ingredientsPrice = 0;
  orderedPizza.ingredients.map(
    (ingredient) =>
      ingredient.selected === true && (ingredientsPrice += ingredient.price)
  );
  return ingredientsPrice + orderedPizza.price;
};
