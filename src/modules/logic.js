let arrayOfRecipes = [
  {
    name: "Arroz con Pollo",
    ingredients: ["Arroz", "Pollo", "Sal"],
  },
  {
    name: "Fideos con Salsa",
    ingredients: ["Fideos", "Salsa", "Sal"],
  },
  {
    name: "Hamburgesas",
    ingredients: ["Carne Picada", "Pan", "Cebolla", "Sal"],
  },
  {
    name: "Ensalada de primavera",
    ingredients: ["Fideos", "Mayonesa", "Atun", "Choclo", "Sal"],
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
];
let currentIngedients = ["Arroz", "Pollo"];
let availableDishes = [];

function checkIngredient(dish, ingredient) {
  return dish.ingredients.includes(`${ingredient}`) ? true : false;
}

function filterDishes(ingredient) {
  let dishes = [];
  for (let i = 0; i < arrayOfRecipes.length; i++) {
    if (checkIngredient(arrayOfRecipes[i], ingredient)) {
      dishes.push(arrayOfRecipes[i].name);
    }
  }
  return dishes;
}

module.exports = filterDishes;
