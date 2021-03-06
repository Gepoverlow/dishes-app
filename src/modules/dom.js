import { arrayOfRecipes, totalIngredients, Ingredient } from "./logic";

function renderIngredients(ingredients) {
  let container = document.querySelector(".container-ingredients");
  emptyNode(container);

  for (let i = 0; i < ingredients.length; i++) {
    let ingredientCard = document.createElement("div");
    let ingredientName = document.createElement("p");

    ingredientName.textContent = ingredients[i].name;
    ingredientCard.appendChild(ingredientName);

    ingredientCard.style.backgroundImage = `url(${ingredients[i].img})`;
    ingredientCard.classList.add("ingredients");

    container.appendChild(ingredientCard);
  }
}

function renderAvailableDishes(dishes) {
  // let containerDishes = document.querySelector(".container-info-main");
  // emptyNode(containerDishes);
  // let dishUL = document.createElement("ul");
  // dishUL.classList.add("ul-dishes");
  // containerDishes.appendChild(dishUL);
  // if (dishes.length !== 0) {
  //   for (let i = 0; i < dishes.length; i++) {
  //     let dishLI = document.createElement("li");
  //     dishLI.textContent = dishes[i].name;
  //     dishUL.appendChild(dishLI);
  //   }
  // } else {
  //   let noDishes = document.createElement("li");
  //   noDishes.textContent = "No Available Dishes";
  //   dishUL.appendChild(noDishes);
  // }
}

function renderDishIngredients(domElement, dish, selectedIngredients) {
  for (let i = 0; i < dish.ingredients.length; i++) {
    let ingredientLI = document.createElement("li");
    ingredientLI.textContent = dish.ingredients[i];

    ingredientLI.classList.add("ingredientLI");

    selectedIngredients.includes(`${ingredientLI.textContent}`)
      ? ingredientLI.classList.add("available")
      : ingredientLI.classList.remove("available");

    domElement.appendChild(ingredientLI);
  }
}

function renderAllDishes(dishes, selectedIngredients, availableDishes) {
  let containerDishes = document.querySelector(".container-info-main");
  emptyNode(containerDishes);

  for (let i = 0; i < dishes.length; i++) {
    let dishDiv = document.createElement("div");
    containerDishes.appendChild(dishDiv);

    let dishHeader = document.createElement("div");
    dishHeader.className = "dish-header";
    dishDiv.appendChild(dishHeader);
    //

    let dishName = document.createElement("h3");
    dishName.classList.add("dishH3");
    dishName.textContent = dishes[i].name;

    availableDishes.includes(`${dishName.textContent}`)
      ? dishName.classList.add("available")
      : dishName.classList.remove("available");

    dishHeader.appendChild(dishName);

    let iconsContainer = document.createElement("div");
    iconsContainer.className = "icons-container";
    dishHeader.appendChild(iconsContainer);

    let editIcon = document.createElement("span");
    editIcon.id = "edit-button";
    editIcon.className = "material-icons-outlined";
    editIcon.textContent = "edit";

    iconsContainer.appendChild(editIcon);

    let deleteIcon = document.createElement("span");
    deleteIcon.id = "delete-button";
    deleteIcon.className = "material-icons-outlined";
    deleteIcon.textContent = "clear";

    iconsContainer.appendChild(deleteIcon);

    //

    let dishIngredientsContainer = document.createElement("div");
    dishIngredientsContainer.className = "dish-ingredients-container";
    dishIngredientsContainer.classList.add("hidden");
    dishDiv.appendChild(dishIngredientsContainer);

    let dishUL = document.createElement("ul");
    dishIngredientsContainer.appendChild(dishUL);

    renderDishIngredients(dishUL, dishes[i], selectedIngredients);
  }
}

function filterCurrentIngredients(arrayOfSelectedIngredients) {
  let allIngredients = document.querySelectorAll(".ingredientLI");

  for (let i = 0; i < allIngredients.length; i++) {
    arrayOfSelectedIngredients.includes(`${allIngredients[i].textContent}`)
      ? allIngredients[i].classList.add("available")
      : allIngredients[i].classList.remove("available");
  }
}

function filterCurrentDishes(arrayOfAvailableDishes) {
  let allDishes = document.querySelectorAll(".dishH3");

  for (let i = 0; i < allDishes.length; i++) {
    arrayOfAvailableDishes.includes(`${allDishes[i].textContent}`)
      ? allDishes[i].classList.add("available")
      : allDishes[i].classList.remove("available");
  }
}

function selectIngredient(e) {
  if (e.target.className === "ingredients") {
    e.target.classList.add("selected");
  } else if (e.target.nodeName === "P") {
    e.target.parentNode.classList.add("selected");
  }
}

function deselectIngredient(e) {
  if (e.target.className === "ingredients selected") {
    e.target.classList.remove("selected");
  } else if (e.target.nodeName === "P") {
    e.target.parentNode.classList.remove("selected");
  }
}

function selectedIngredients(className) {
  let selected = document.querySelectorAll(`.${className}`);
  let arrayOfIngredients = [];

  for (let i = 0; i < selected.length; i++) {
    arrayOfIngredients.push(selected[i].innerText);
  }

  return arrayOfIngredients;
}

function emptyNode(node) {
  while (node.lastElementChild) {
    node.removeChild(node.lastElementChild);
  }
}

function addIng(input, ingredientArray, parent) {
  if (input.value !== "") {
    let newIngredient = new Ingredient(`${input.value}`);
    ingredientArray.push(newIngredient);

    input.value = "";

    newIngredient.createDom(parent);

    updateFormList(selectedIngredients("selected"));
  }
}

function renderFormAdd(selectedIngredients) {
  let containerDishes = document.querySelector(".container-info-main");
  let containerIngredients = document.querySelector(".container-ingredients");
  emptyNode(containerDishes);

  let form = document.createElement("form");
  containerDishes.appendChild(form);

  //
  form.setAttribute("action", "javascript:void(0)");
  form.setAttribute("method", "post");
  //

  let label = document.createElement("label");
  label.setAttribute("for", "form-input-add");
  let input = document.createElement("input");
  input.id = "form-input-add";
  input.setAttribute("placeholder", "Enter New Dish Name");
  form.appendChild(label);
  form.appendChild(input);

  let ingredientDiv = document.createElement("div");
  ingredientDiv.className = "form-ingredients-container";
  ingredientDiv.textContent = "Ingredients:";
  form.appendChild(ingredientDiv);

  let ingredientUL = document.createElement("ul");
  ingredientUL.className = "form-ingredients-list";
  ingredientDiv.appendChild(ingredientUL);

  let addIngredient = document.createElement("input");
  addIngredient.id = "form-input-add-ingredient";
  addIngredient.setAttribute("placeholder", "Enter New Ingredient");
  addIngredient.addEventListener("blur", () => {
    addIng(addIngredient, totalIngredients, containerIngredients);
  });
  ingredientDiv.appendChild(addIngredient);

  updateFormList(selectedIngredients);

  let addButton = document.createElement("span");
  addButton.className = "submit-button";
  addButton.classList.add("material-icons-outlined");
  addButton.textContent = "check";
  form.appendChild(addButton);
}

function renderFormEdit(dishObject, selectedIngredients) {
  let containerDishes = document.querySelector(".container-info-main");
  let containerIngredients = document.querySelector(".container-ingredients");
  emptyNode(containerDishes);

  let form = document.createElement("form");
  containerDishes.appendChild(form);

  //
  form.setAttribute("action", "javascript:void(0)");
  form.setAttribute("method", "post");
  //

  let label = document.createElement("label");
  label.setAttribute("for", "form-input-edit");
  let input = document.createElement("input");
  input.id = "form-input-edit";
  input.value = `${dishObject.name}`;
  input.setAttribute("placeholder", "Enter New Dish Name");
  form.appendChild(label);
  form.appendChild(input);

  let ingredientDiv = document.createElement("div");
  ingredientDiv.className = "form-ingredients-container";
  ingredientDiv.textContent = "Ingredients:";
  form.appendChild(ingredientDiv);

  let ingredientUL = document.createElement("ul");
  ingredientUL.className = "form-ingredients-list";
  ingredientDiv.appendChild(ingredientUL);

  let addIngredient = document.createElement("input");
  addIngredient.id = "form-input-edit-ingredient";
  addIngredient.setAttribute("placeholder", "Enter New Ingredient");
  addIngredient.addEventListener("blur", () => {
    addIng(addIngredient, totalIngredients, containerIngredients);
  });
  ingredientDiv.appendChild(addIngredient);

  updateFormList(selectedIngredients);

  let submitEdit = document.createElement("span");
  submitEdit.className = "submit-button-edit";
  submitEdit.classList.add("material-icons-outlined");
  submitEdit.textContent = "check";
  form.appendChild(submitEdit);
}

function updateFormList(selectedIngredients) {
  if (
    typeof document.querySelector(".form-ingredients-list") != "undefined" &&
    document.querySelector(".form-ingredients-list") !== null
  ) {
    let list = document.querySelector(".form-ingredients-list");
    emptyNode(list);

    for (let i = 0; i < selectedIngredients.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = selectedIngredients[i];
      list.appendChild(listItem);
    }
  }
}

function unSelect(nodelist) {
  for (let i = 0; i < nodelist.length; i++) {
    nodelist[i].classList.remove("selected");
  }
}

function selectObjectIngredients(nodelist, dishObject) {
  unSelect(nodelist);

  for (let i = 0; i < nodelist.length; i++) {
    dishObject.ingredients.includes(nodelist[i].textContent)
      ? nodelist[i].classList.add("selected")
      : nodelist[i].classList.remove("selected");
  }
}

export {
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
};
