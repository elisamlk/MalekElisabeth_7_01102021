
export function dropIngredientsList() {
  let chevronIngredient = document.querySelector(".chevron-ingredients");
  console.log(chevronIngredient)
  let ingredientsList = document.querySelector(".ingredients-list");
  chevronIngredient.addEventListener("click", function () {
    ingredientsList.classList.toggle("is-open");
  });
}

// ustensils

//appareils

