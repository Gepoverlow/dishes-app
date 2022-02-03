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
  let containerDishes = document.querySelector(".container-info-main");
  emptyNode(containerDishes);

  let dishUL = document.createElement("ul");
  dishUL.classList.add("ul-dishes");
  containerDishes.appendChild(dishUL);

  if (dishes.length !== 0) {
    for (let i = 0; i < dishes.length; i++) {
      let dishLI = document.createElement("li");
      dishLI.textContent = dishes[i].name;

      dishUL.appendChild(dishLI);
    }
  } else {
    let noDishes = document.createElement("li");
    noDishes.textContent = "No Available Dishes";

    dishUL.appendChild(noDishes);
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

export {
  renderIngredients,
  selectIngredient,
  deselectIngredient,
  selectedIngredients,
  renderAvailableDishes,
};
