import { SELECT_INGREDIENT } from "../actions/types";

import BekonImage from "../images/ingredients/bekon.png";
import CebulaImage from "../images/ingredients/cebula.png";
import ChilliImage from "../images/ingredients/chilli.png";
import OliwkiImage from "../images/ingredients/oliwki.png";
import PaprykaImage from "../images/ingredients/papryka.png";
import PepperoniImage from "../images/ingredients/pepperoni.png";
import PieczarkiImage from "../images/ingredients/pieczarki.png";
import PomidoryImage from "../images/ingredients/pomidory.png";

const initialState = [
  {
    name: "pieczarki",
    selected: false,
    image: PieczarkiImage,
    price: 0.5,
  },
  {
    name: "oliwki",
    selected: false,
    image: OliwkiImage,
    price: 0.5,
  },
  {
    name: "pepperoni",
    selected: false,
    image: PepperoniImage,
    price: 1,
  },
  {
    name: "pomidory",
    selected: true,
    image: PomidoryImage,
    price: 1,
  },
  {
    name: "chilli",
    selected: false,
    image: ChilliImage,
    price: 1.5,
  },
  {
    name: "bekon",
    selected: false,
    image: BekonImage,
    price: 2,
  },
  {
    name: "cebula",
    selected: false,
    image: CebulaImage,
    price: 0.5,
  },
  {
    name: "papryka",
    selected: false,
    image: PaprykaImage,
    price: 1,
  },
];

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT:
      return state.map((ingredient) =>
        ingredient.name === action.name
          ? { ...ingredient, selected: !ingredient.selected }
          : ingredient
      );
    default:
      return state;
  }
};

export default ingredientsReducer;
