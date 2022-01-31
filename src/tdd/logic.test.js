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
