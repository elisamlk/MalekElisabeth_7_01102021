export function addIngredients(recipes) {
  let ingredientsList = document.querySelector(".ingredients-list");
  let ingredientsArray = [];
  for (let i in recipes) {
    let ingredients = recipes[i].ingredients;
    for (let i in ingredients) {
      ingredientsArray.push(ingredients[i].ingredient);
    }
  }
  let deleteDuplicates = new Set(ingredientsArray);
  let newIngredientsArray = [...deleteDuplicates];
  for (let i in newIngredientsArray) {
    ingredientsList.innerHTML += `<p class="ingredient">${newIngredientsArray[i]}</p>`;
  }
}
