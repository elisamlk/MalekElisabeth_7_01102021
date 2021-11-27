export function addIngredients(recipes) {
  let ingredientsList = document.querySelector(".ingredients-list");
  let ingredientsArray = [];
  for (let i in recipes) {
    let ingredients = recipes[i].ingredients;
    for (let i in ingredients) {
      ingredientsArray.push(ingredients[i].ingredient);
    }
  }
  // Supprimer les doublons de la liste
  let deleteDuplicates = new Set(ingredientsArray);
  let newIngredientsArray = [...deleteDuplicates];
  // Trier par ordre alphabétique
  newIngredientsArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  for (let i in newIngredientsArray) {
    ingredientsList.innerHTML += `<p class="ingredient">${newIngredientsArray[i]}</p>`;
  }
}
