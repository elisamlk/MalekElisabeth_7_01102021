import { Recipe } from "./class/Recipe.js";


function displayRecipes() {
  fetch("./data/recipes.json")
    .then((response) => response.json())
    .then((data) => {
      let recipes = data.recipes;
      console.log(recipes);
      for (let i in recipes) {
        new Recipe(recipes[i]).createRecipeCard();
        new Recipe(recipes[i]).addIngredients();
        new Recipe(recipes[i]).addAppliances();
        new Recipe(recipes[i]).addUstensils();
      }
      
    });
}

displayRecipes();



