import "./css//styles/style.css";
import {
  arrayOfRecipes,
  filterDishes,
  totalIngredients,
} from "../src/modules/logic.js";
import {
  renderIngredients,
  selectIngredient,
  deselectIngredient,
  selectedIngredients,
  renderAvailableDishes,
  renderAllDishes,
} from "../src/modules/dom.js";

let containerIngredients = document.querySelector(".container-ingredients");

window.addEventListener("load", () => {
  renderIngredients(totalIngredients);
  renderAllDishes(arrayOfRecipes);
});

containerIngredients.addEventListener("click", (e) => {
  if (
    e.target.className === "ingredients" ||
    e.target.parentNode.className === "ingredients"
  ) {
    selectIngredient(e);
  } else {
    deselectIngredient(e);
  }

  console.log(filterDishes(arrayOfRecipes, selectedIngredients("selected")));
});
