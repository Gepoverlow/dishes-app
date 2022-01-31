function renderIngredients(ingredients) {
  let container = document.querySelector(".container-ingredients");
  container.innerHTML = "";
  for (let i = 0; i < ingredients.length; i++) {
    let ingredientCard = document.createElement("div");
    let ingredientName = document.createElement("p");

    ingredientName.textContent = ingredients[i];
    ingredientCard.appendChild(ingredientName);

    ingredientCard.classList.add("ingredients");

    container.appendChild(ingredientCard);
  }
}

export { renderIngredients };
