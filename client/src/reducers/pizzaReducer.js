import { SELECT_INGREDIENT, SELECT_SIZE, RESET_PIZZA } from "../actions/types";

import BekonImage from "../images/ingredients/bekon.png";
import CebulaImage from "../images/ingredients/cebula.png";
import ChilliImage from "../images/ingredients/chilli.png";
import OliwkiImage from "../images/ingredients/oliwki.png";
import PaprykaImage from "../images/ingredients/papryka.png";
import PepperoniImage from "../images/ingredients/pepperoni.png";
import PieczarkiImage from "../images/ingredients/pieczarki.png";
import PomidoryImage from "../images/ingredients/pomidory.png";

const initialState = {
  id: null,
  size: "M",
  price: 15,
  ready: false,
  quantity: 1,
  ingredients: [
    {
      name: "pieczarki",
      selected: false,
      image: PieczarkiImage,
      pathPosition: "170",
      price: 0.5,
    },
    {
      name: "oliwki",
      selected: false,
      image: OliwkiImage,
      pathPosition: "340",
      price: 0.5,
    },
    {
      name: "pepperoni",
      selected: false,
      image: PepperoniImage,
      pathPosition: "480",
      price: 1,
    },
    {
      name: "pomidory",
      selected: true,
      image: PomidoryImage,
      pathPosition: "660",
      price: 1,
    },
    {
      name: "chilli",
      selected: false,
      image: ChilliImage,
      pathPosition: "830",
      price: 1.5,
    },
    {
      name: "bekon",
      selected: false,
      image: BekonImage,
      pathPosition: "950",
      price: 2,
    },
    {
      name: "cebula",
      selected: false,
      image: CebulaImage,
      pathPosition: "1070",
      price: 0.5,
    },
    {
      name: "papryka",
      selected: false,
      image: PaprykaImage,
      pathPosition: "1210",
      price: 1,
    },
  ],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient.name === action.name
            ? { ...ingredient, selected: !ingredient.selected }
            : ingredient
        ),
      };
    case SELECT_SIZE:
      return {
        ...state,
        size: action.size,
        price: action.price,
      };
    case RESET_PIZZA:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => ({
          ...ingredient,
          selected: false,
        })),
        size: "M",
        price: 15,
        ready: false,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
