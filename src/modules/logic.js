let arrayOfRecipes = [
  {
    name: "Arroz con Pollo",
    ingredients: ["Chicken", "Rice", "Mayo"],
  },
  {
    name: "Fideos con Salsa",
    ingredients: ["Noodles", "Tomato Sause"],
  },
  {
    name: "Hamburgesas",
    ingredients: ["Meat", "Bread", "Onion"],
  },
  {
    name: "Ensalada de primavera",
    ingredients: ["Noodles", "Mayo", "Tuna", "Corn"],
  },
];

let totalIngredients = [
  {
    name: "Chicken",
    img: require("../css/images/kip.jpg"),
  },
  {
    name: "Rice",
    img: require("../css/images/rice.jpg"),
  },
  {
    name: "Mayo",
    img: require("../css/images/mayo.jpg"),
  },
  {
    name: "Noodles",
    img: require("../css/images/fideos.jpg"),
  },
  {
    name: "Tomato Sause",
    img: require("../css/images/salsa.jpg"),
  },
  {
    name: "Meat",
    img: require("../css/images/carne-picada.jpg"),
  },
  {
    name: "Bread",
    img: require("../css/images/pan.jpg"),
  },
  {
    name: "Onion",
    img: require("../css/images/cebolla.jpg"),
  },
  {
    name: "Tuna",
    img: require("../css/images/atun.jpg"),
  },
  {
    name: "Corn",
    img: require("../css/images/maiz.jpg"),
  },
  {
    name: "Milk",
    img: require("../css/images/milk.jpg"),
  },
  {
    name: "Eggs",
    img: require("../css/images/huevos.jpg"),
  },
  {
    name: "Cooking Cream",
    img: require("../css/images/crema.jpg"),
  },
  {
    name: "Cheese",
    img: require("../css/images/queso-rayado.jpg"),
  },
  {
    name: "Cucumber",
    img: require("../css/images/pepino.jpg"),
  },
  {
    name: "Lettuce",
    img: require("../css/images/lettuce.jpeg"),
  },
  {
    name: "Ham",
    img: require("../css/images/jamon.jpg"),
  },
  {
    name: "Chorizo",
    img: require("../css/images/chorizo.jpeg"),
  },
  {
    name: "Feta Cheese",
    img: require("../css/images/queso-feta.jpg"),
  },
  {
    name: "Chives",
    img: require("../css/images/cebollin.jpg"),
  },
  {
    name: "Tomato",
    img: require("../css/images/tomato.jpg"),
  },
  {
    name: "Falafel",
    img: require("../css/images/faladel.jpg"),
  },
  {
    name: "Broccoli",
    img: require("../css/images/broccoli.jpg"),
  },
  {
    name: "Avocado",
    img: require("../css/images/avocado.jpg"),
  },
  {
    name: "Lemon",
    img: require("../css/images/lemon.jpg"),
  },
  {
    name: "Carrot",
    img: require("../css/images/carrot.jpg"),
  },
  {
    name: "Potato",
    img: require("../css/images/potato.jpeg"),
  },
  {
    name: "Lentil",
    img: require("../css/images/lentejas.jpg"),
  },
  {
    name: "Garlic",
    img: require("../css/images/ajo.jpg"),
  },
];

// let totalIngredients = [
//   "Arroz",
//   "Pollo",
//   "Fideos",
//   "Salsa",
//   "Carne Picada",
//   "Pan",
//   "Cebolla",
//   "Salsa de Tomate",
//   "Atun",
//   "Choclo",
//   "Mayonesa",
//   "Leche",
//   "Huevos",
//   "Crema",
//   "Queso Rayado",
//   "Pepino",
//   "Lechuga",
//   "Jamon",
//   "Chorizo",
//   "Queso Feta",
//   "Cebollin",
//   "Tomate",
//   "Falafel",
//   "Manteca",
//   "Broccoli",
//   "Avocado",
//   "Limon",
//   "Zanahoria",
//   "Patata",
//   "Lentejas",
//   "Ajo",
// ];

class Dish {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

function containsAll(needed, owned) {
  return needed.ingredients.every((i) => owned.includes(i));
}

function filterDishes(recipes, ingredients) {
  let availableDishes = recipes.filter((dish) =>
    containsAll(dish, ingredients)
  );

  return availableDishes;
}

function filteredDishName(arr) {
  return arr.map((dish) => dish.name);
}

export {
  filterDishes,
  arrayOfRecipes,
  totalIngredients,
  filteredDishName,
  Dish,
};
