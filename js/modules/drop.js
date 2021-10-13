export function dropIngredientsList() {
  let chevronIngredient = document.querySelector(".chevron-ingredients");
  let searchIngredients = document.querySelector(".search-ingredients");
  let ingredientsDropDown = document.querySelector(".ingredients-drop-down");
  let ingredientsList = document.querySelector(".ingredients-list");
  chevronIngredient.addEventListener("click", function () {
    searchIngredients.style.display = "none";
    ingredientsDropDown.style.display = "flex";
    ingredientsList.style.display = "flex";
  });
  let chevronUpIngredients = document.querySelector(".chevron-up-ingredients");
  chevronUpIngredients.addEventListener("click", function () {
    searchIngredients.style.display = "flex";
    ingredientsDropDown.style.display = "none";
    ingredientsList.style.display = "none";
  });
}

export function dropAppliancesList() {
  let chevronIngredient = document.querySelector(".chevron-appliances");
  let searchIngredients = document.querySelector(".search-appliances");
  let ingredientsDropDown = document.querySelector(".appliances-drop-down");
  let ingredientsList = document.querySelector(".appliances-list");
  chevronIngredient.addEventListener("click", function () {
    searchIngredients.style.display = "none";
    ingredientsDropDown.style.display = "flex";
    ingredientsList.style.display = "flex";
  });
  let chevronUpIngredients = document.querySelector(".chevron-up-appliances");
  chevronUpIngredients.addEventListener("click", function () {
    searchIngredients.style.display = "flex";
    ingredientsDropDown.style.display = "none";
    ingredientsList.style.display = "none";
  });
}

export function dropUstensilsList() {
  let chevronIngredient = document.querySelector(".chevron-ustensils");
  let searchIngredients = document.querySelector(".search-ustensils");
  let ingredientsDropDown = document.querySelector(".ustensils-drop-down");
  let ingredientsList = document.querySelector(".ustensils-list");
  chevronIngredient.addEventListener("click", function () {
    searchIngredients.style.display = "none";
    ingredientsDropDown.style.display = "flex";
    ingredientsList.style.display = "flex";
  });
  let chevronUpIngredients = document.querySelector(".chevron-up-ustensils");
  chevronUpIngredients.addEventListener("click", function () {
    searchIngredients.style.display = "flex";
    ingredientsDropDown.style.display = "none";
    ingredientsList.style.display = "none";
  });
}




