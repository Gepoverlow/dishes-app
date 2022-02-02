import "./css//styles/style.css";
import { arrayOfRecipes, totalIngredients } from "../src/modules/logic.js";
import {
  renderIngredients,
  selectIngredient,
  deselectIngredient,
} from "../src/modules/dom.js";

let container = document.querySelector(".container-all");

container.addEventListener("click", (e) => {
  if (e.target.className === "ingredients") {
    selectIngredient(e);
  } else {
    deselectIngredient(e);
  }
});

renderIngredients(totalIngredients);
