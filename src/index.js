import "./css//styles/style.css";
import { arrayOfRecipes, totalIngredients } from "../src/modules/logic.js";
import { renderIngredients } from "../src/modules/dom.js";

renderIngredients(totalIngredients);
