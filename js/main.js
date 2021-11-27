import { addAppliances } from "./modules/appliances.js";
import {
  dropIngredientsList,
  dropAppliancesList,
  dropUstensilsList,
} from "./modules/drop.js";
import { addIngredients } from "./modules/ingredients.js";
import { createRecipeCard } from "./modules/recipes.js";
import { addUstensils } from "./modules/ustensils.js";

function displayRecipes() {
  fetch("./data/recipes.json")
    .then((response) => response.json())
    .then((data) => {
      let recipes = data.recipes;
      createRecipeCard(recipes);
      addAppliances(recipes);
      addUstensils(recipes);
      addIngredients(recipes);
    });

  dropIngredientsList();
  dropAppliancesList();
  dropUstensilsList();
}

displayRecipes();

