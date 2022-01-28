const filterDishes = require("../modules/logic.js");

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

test("testing function", () => {
  expect(filterDishes("Fideos")).toEqual([
    "Fideos con Salsa",
    "Ensalada de primavera",
  ]);
});

test("testing function", () => {
  expect(filterDishes("Pan")).toEqual(["Hamburgesas"]);
});

test("testing function", () => {
  expect(filterDishes("Salsa")).toEqual(["Fideos con Salsa"]);
});

test("testing function", () => {
  expect(filterDishes("Pollo")).toEqual(["Arroz con Pollo"]);
});

test("testing function", () => {
  expect(filterDishes("Sal")).toEqual([
    "Arroz con Pollo",
    "Fideos con Salsa",
    "Hamburgesas",
    "Ensalada de primavera",
  ]);
});
