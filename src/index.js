import "./css//styles/style.css";
import {
  arrayOfRecipes,
  filterDishes,
  totalIngredients,
  filteredDishName,
  Dish,
  Ingredient,
} from "../src/modules/logic.js";
import {
  renderIngredients,
  selectIngredient,
  deselectIngredient,
  selectedIngredients,
  renderAvailableDishes,
  renderAllDishes,
  filterCurrentIngredients,
  filterCurrentDishes,
  renderFormAdd,
  renderFormEdit,
  updateFormList,
  unSelect,
  selectObjectIngredients,
} from "../src/modules/dom.js";

let body = document.getElementsByTagName("body")[0];
let containerIngredients = document.querySelector(".container-ingredients");

let addButton = document.getElementById("add-button");
let seeButton = document.getElementById("see-button");

window.addEventListener("load", () => {
  renderIngredients(totalIngredients);
  renderAllDishes(
    arrayOfRecipes,
    selectedIngredients("selected"),
    filteredDishName(
      filterDishes(arrayOfRecipes, selectedIngredients("selected"))
    )
  );
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

  filterCurrentIngredients(selectedIngredients("selected"));
  filterCurrentDishes(
    filteredDishName(
      filterDishes(arrayOfRecipes, selectedIngredients("selected"))
    )
  );

  updateFormList(selectedIngredients("selected"));
});

addButton.addEventListener("click", () => {
  renderFormAdd(selectedIngredients("selected"));
});

seeButton.addEventListener("click", () => {
  renderAllDishes(
    arrayOfRecipes,
    selectedIngredients("selected"),
    filteredDishName(
      filterDishes(arrayOfRecipes, selectedIngredients("selected"))
    )
  );
});

body.addEventListener("click", (e) => {
  if (e.target.className === "submit-button material-icons-outlined") {
    e.preventDefault();
    let input = document.getElementById("form-input-add");
    let selectedItems = document.querySelectorAll(".selected");

    if (input.value !== "" && selectedIngredients("selected").length !== 0) {
      let dish = new Dish(`${input.value}`, selectedIngredients("selected"));
      arrayOfRecipes.push(dish);

      input.value = "";
      unSelect(selectedItems);
      updateFormList(selectedIngredients("selected"));
    }
  }

  if (e.target.id === "edit-button") {
    let dishName = e.target.previousSibling.textContent;
    let allDishCards = document.querySelectorAll(".ingredients");

    let dish = arrayOfRecipes.find((dish) => dish.name.includes(dishName));

    selectObjectIngredients(allDishCards, dish);

    renderFormEdit(dish, selectedIngredients("selected"));
  }
});
