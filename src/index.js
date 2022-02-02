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
} from "../src/modules/dom.js";

let container = document.querySelector(".container-all");

container.addEventListener("click", (e) => {
  if (
    e.target.className === "ingredients" ||
    e.target.parentNode.className === "ingredients"
  ) {
    selectIngredient(e);
  } else {
    deselectIngredient(e);
  }

  //   console.log(selectedIngredients("selected"));
  console.log(filterDishes(arrayOfRecipes, selectedIngredients("selected")));
});

renderIngredients(totalIngredients);
