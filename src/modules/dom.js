function renderIngredients(ingredients) {
  let container = document.querySelector(".container-ingredients");
  container.innerHTML = "";
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

export { renderIngredients };
