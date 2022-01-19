export function dropIngredientsList() {
  let ingredientsContent = document.querySelector(".ingredients-content");
  let chevronIngredient = document.querySelector(".chevron-ingredients");
  let searchIngredients = document.querySelector(".search-ingredients");
  let ingredientsDropDown = document.querySelector(".ingredients-drop-down");
  let ingredientsList = document.querySelector(".ingredients-list");
  chevronIngredient.addEventListener("click", function () {
    searchIngredients.style.display = "none";
    ingredientsDropDown.style.display = "flex";
    ingredientsList.style.display = "flex";
    ingredientsContent.style.width = "500px";
  });
  let chevronUpIngredients = document.querySelector(".chevron-up-ingredients");
  chevronUpIngredients.addEventListener("click", function () {
    searchIngredients.style.display = "flex";
    ingredientsDropDown.style.display = "none";
    ingredientsList.style.display = "none";
    ingredientsContent.style.width = "fit-content";
  });
}

export function dropAppliancesList() {
  let appliancesContent = document.querySelector(".appliances-content");
  let chevronAppliances = document.querySelector(".chevron-appliances");
  let searchAppliances = document.querySelector(".search-appliances");
  let appliancesDropDown = document.querySelector(".appliances-drop-down");
  let appliancesList = document.querySelector(".appliances-list");
  chevronAppliances.addEventListener("click", function () {
    searchAppliances.style.display = "none";
    appliancesDropDown.style.display = "flex";
    appliancesList.style.display = "flex";
    appliancesContent.style.width = "500px";
  });
  let chevronUpAppliances = document.querySelector(".chevron-up-appliances");
  chevronUpAppliances.addEventListener("click", function () {
    searchAppliances.style.display = "flex";
    appliancesDropDown.style.display = "none";
    appliancesList.style.display = "none";
    appliancesContent.style.width = "fit-content";
  });
}

export function dropUstensilsList() {
  let ustensilsContent = document.querySelector(".ustensils-content");
  let chevronUstensil = document.querySelector(".chevron-ustensils");
  let searchUstensils = document.querySelector(".search-ustensils");
  let ustensilsDropDown = document.querySelector(".ustensils-drop-down");
  let ustensilsList = document.querySelector(".ustensils-list");
  chevronUstensil.addEventListener("click", function () {
    searchUstensils.style.display = "none";
    ustensilsDropDown.style.display = "flex";
    ustensilsList.style.display = "flex";
    ustensilsContent.style.width = "500px";
  });
  let chevronUpUstensils = document.querySelector(".chevron-up-ustensils");
  chevronUpUstensils.addEventListener("click", function () {
    searchUstensils.style.display = "flex";
    ustensilsDropDown.style.display = "none";
    ustensilsList.style.display = "none";
    ustensilsContent.style.width = "fit-content";
  });
}





