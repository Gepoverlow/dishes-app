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
];
let currentIngedients = ["Arroz", "Pollo"];

function checkIngredient(dish, ingredient) {
  return dish.ingredients.includes(`${ingredient}`) ? true : false;
}

function filterIngredients(ingredients, possibleDishes) {
  for (let i = 0; i < ingredients.length; i++) {}
}

module.exports = checkIngredient;
