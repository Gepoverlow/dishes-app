let arrayOfRecipes = [
  {
    name: "Arroz con Pollo",
    ingredients: ["Arroz", "Pollo"],
  },
  {
    name: "Fideos con Salsa",
    ingredients: ["Fideos", "Salsa"],
  },
  {
    name: "Hamburgesas",
    ingredients: ["Carne Picada", "Pan", "Cebolla"],
  },
  {
    name: "Ensalada de primavera",
    ingredients: ["Fideos", "Mayonesa", "Atun", "Choclo"],
  },
];

let totalIngredients = [
  "Arroz",
  "Pollo",
  "Fideos",
  "Salsa",
  "Carne Picada",
  "Pan",
  "Cebolla",
  "Salsa de Tomate",
  "Atun",
  "Choclo",
  "Mayonesa",
  "Leche",
  "Huevos",
  "Crema",
  "Queso Rayado",
  "Pepino",
  "Lechuga",
  "Jamon",
  "Chorizo",
  "Queso Feta",
  "Cebollin",
  "Tomate",
  "Falafel",
  "Manteca",
  "Broccoli",
  "Avocado",
  "Limon",
  "Zanahoria",
  "Patata",
  "Lentejas",
  "Ajo",
  "Sal",
];

function containsAll(needed, owned) {
  return needed.ingredients.every((i) => owned.includes(i));
}

console.log(containsAll(arrayOfRecipes[0], totalIngredients));

function filterDishes() {
  let availableDishes = arrayOfRecipes.filter((dish) =>
    containsAll(dish, totalIngredients)
  );

  return availableDishes;
}

console.log(filterDishes());

module.exports = filterDishes;
