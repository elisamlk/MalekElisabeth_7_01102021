export function dropIngredientsList() {
  let chevronIngredient = document.querySelector(".chevron-ingredients");
  console.log(chevronIngredient);
  let ingredientsList = document.querySelector(".ingredients-list");
  chevronIngredient.addEventListener("click", function () {
    ingredientsList.classList.toggle("is-open");
  });
}

export function dropAppliancesList() {
  let chevronAppliance = document.querySelector(".chevron-appliances");
  let appliancesList = document.querySelector(".appliances-list");
  chevronAppliance.addEventListener("click", function () {
    appliancesList.classList.toggle("is-open");
  });
}

//appareils
