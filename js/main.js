import { Recipe } from "./class/Recipe.js";
import {
  dropIngredientsList,
  dropAppliancesList,
  dropUstensilsList
 
} from "./modules/drop.js";

function displayRecipes() {
  fetch("./data/recipes.json")
    .then((response) => response.json())
    .then((data) => {
      let recipes = data.recipes;
      //console.log(recipes);
      for (let i in recipes) {
        let newRecipe = new Recipe(recipes[i]);
        newRecipe.initHTML();
      }
    });
  dropIngredientsList();
  dropAppliancesList();
  dropUstensilsList();
 
}

displayRecipes();





