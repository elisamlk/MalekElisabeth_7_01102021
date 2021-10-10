/*export function dropIngredients(recipes) {
  let ingredientsArray = [];
  let chevronIngredients = document.querySelector(".chevron-ingredients");
  let ingredientsList = document.querySelector(".ingredients-list");

  chevronIngredients.addEventListener("click", function () {
    for (let i in recipes) {
      let ingredients = recipes[i].ingredients;
      for (let y in ingredients) {
        let ingredient = ingredients[y].ingredient;
        ingredientsArray.push(ingredient);
      }
    }
    for (let i in ingredientsArray) {
      ingredientsList.innerHTML += `
    <p>${ingredientsArray[i]}</p>`;
    }
    
  });
}
*/

