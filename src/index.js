import "./css//styles/style.css";
import {
  arrayOfRecipes,
  filterDishes,
  totalIngredients,
  filteredDishName,
  Dish,
  Ingredient,
  findIndex,
  updateDishArray,
  deleteDish,
  capitalize,
  checkIfExists,
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
  toggleNav,
} from "../src/modules/dom.js";

let body = document.getElementsByTagName("body")[0];
let containerIngredients = document.querySelector(".container-ingredients");
let containerInfo = document.querySelector(".container-info");

let addButton = document.getElementById("add-button");
let seeButton = document.getElementById("see-button");
let menuButton = document.getElementById("open-info-button");
let clickedDish = undefined;
let nav = false;

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

menuButton.addEventListener("click", () => {
  if (!nav) {
    containerInfo.style.width = "410px";
    containerInfo.style.padding = "20px";
    nav = true;
  } else {
    containerInfo.style.width = "0px";
    containerInfo.style.padding = "0px";
    nav = false;
  }
});

body.addEventListener("click", (e) => {
  if (e.target.className === "submit-button material-icons-outlined") {
    e.preventDefault();

    let input = document.getElementById("form-input-add");
    let selectedItems = document.querySelectorAll(".selected");
    let capitalInput = capitalize(`${input.value}`);

    if (
      input.value !== "" &&
      checkIfExists(arrayOfRecipes, capitalInput) &&
      selectedIngredients("selected").length !== 0
    ) {
      let dish = new Dish(`${capitalInput}`, selectedIngredients("selected"));
      arrayOfRecipes.push(dish);

      input.value = "";
      unSelect(selectedItems);
      updateFormList(selectedIngredients("selected"));
    }
  }

  if (e.target.id === "edit-button") {
    let dishName = e.target.previousSibling.textContent;
    let allDishCards = document.querySelectorAll(".ingredients");

    clickedDish = arrayOfRecipes.find((dish) => dish.name === dishName);

    selectObjectIngredients(allDishCards, clickedDish);

    renderFormEdit(clickedDish, selectedIngredients("selected"));
  }

  if (e.target.className === "submit-button-edit material-icons-outlined") {
    e.preventDefault();

    let input = document.getElementById("form-input-edit");
    let selectedItems = document.querySelectorAll(".selected");
    let capitalInput = capitalize(`${input.value}`);

    if (input.value !== "" && selectedIngredients("selected").length !== 0) {
      let selectedArray = selectedIngredients("selected");
      let index = findIndex(clickedDish.id, arrayOfRecipes);

      updateDishArray(arrayOfRecipes, index, capitalInput, selectedArray);

      unSelect(selectedItems);
      updateFormList(selectedArray);

      renderAllDishes(
        arrayOfRecipes,
        selectedIngredients("selected"),
        filteredDishName(
          filterDishes(arrayOfRecipes, selectedIngredients("selected"))
        )
      );
    }
  }

  if (e.target.id === "delete-button") {
    let selectedItems = document.querySelectorAll(".selected");
    let dishName = e.target.previousSibling.previousSibling.textContent;

    clickedDish = arrayOfRecipes.find((dish) => dish.name === dishName);

    let index = findIndex(clickedDish.id, arrayOfRecipes);

    deleteDish(arrayOfRecipes, index);
    unSelect(selectedItems);

    renderAllDishes(
      arrayOfRecipes,
      selectedIngredients("selected"),
      filteredDishName(
        filterDishes(arrayOfRecipes, selectedIngredients("selected"))
      )
    );
  }
});
