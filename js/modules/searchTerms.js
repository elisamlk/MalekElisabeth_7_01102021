import { recipeFilter } from "../algo_1/algo_1.js";
import { capitalize } from "./utils.js";


export function searchTerms() {
  let elementMatch = [];
  let tagSection = document.querySelector(".tags");
  let ingredientList = document.querySelectorAll(".ingredient");
  let applianceList = document.querySelectorAll(".appliance");
  let ustensilList = document.querySelectorAll(".ustensil");
  mainSearchBar(elementMatch);
  ingredientTagFilter(ingredientList, tagSection, elementMatch);
  applianceTagFilter(applianceList, tagSection, elementMatch);
  ustensilTagFilter(ustensilList, tagSection, elementMatch);
  filterSearch(ingredientList, applianceList, ustensilList);
}

function mainSearchBar(elementMatch) {
  let searchTerm = document.querySelector(".searchTerm");
  searchTerm.addEventListener("keyup", function () {
    let searchValue = capitalize(searchTerm.value);
    if (searchValue.length > 2) {
      elementMatch.push(searchValue);
      recipeFilter(elementMatch);
      console.log(elementMatch);
    } else {
      ("");
    }
  });
}

function ingredientTagFilter(ingredientList, tagSection, elementMatch) {
  ingredientList.forEach((ingredient) => {
    ingredient.addEventListener("click", function () {
      let ingredientTag = ingredient.textContent;
      let ingredientElement = document.createElement("p");
      ingredientElement.textContent = ingredientTag;
      let closeElement = document.createElement("i");
      ingredientElement.className = "ingredient-tag tag-style";
      closeElement.className = "far fa-times-circle";
      tagSection.appendChild(ingredientElement);
      ingredientElement.appendChild(closeElement);
      elementMatch.push(ingredientTag);
      console.log(elementMatch);
      closeElement.addEventListener("click", function () {
        ingredientElement.style.display = "none";
        elementMatch.pop(ingredientElement);
        console.log(elementMatch);
      });
      recipeFilter(elementMatch);
    });
  });
}

function applianceTagFilter(applianceList, tagSection, elementMatch) {
  applianceList.forEach((appliance) => {
    appliance.addEventListener("click", function () {
      let applianceTag = appliance.textContent;
      let applianceElement = document.createElement("p");
      applianceElement.textContent = applianceTag;
      let closeElement = document.createElement("i");
      applianceElement.className = "appliance-tag tag-style";
      closeElement.className = "far fa-times-circle";
      tagSection.appendChild(applianceElement);
      applianceElement.appendChild(closeElement);
      elementMatch.push(applianceTag);
      console.log(elementMatch);
      closeElement.addEventListener("click", function () {
        applianceElement.style.display = "none";
        elementMatch.pop(applianceElement);
        console.log(elementMatch);
      });
      recipeFilter(elementMatch);
    });
  });
}

function ustensilTagFilter(ustensilList, tagSection, elementMatch) {
  ustensilList.forEach((ustensil) => {
    ustensil.addEventListener("click", function () {
      let ustensilTag = ustensil.innerText;
      let ustensilElement = document.createElement("p");
      ustensilElement.textContent = ustensilTag;
      let closeElement = document.createElement("i");
      ustensilElement.className = "ustensil-tag tag-style";
      closeElement.className = "far fa-times-circle";
      tagSection.appendChild(ustensilElement);
      ustensilElement.appendChild(closeElement);
      elementMatch.push(ustensilTag);
      closeElement.addEventListener("click", function () {
        ustensilElement.style.display = "none";
        elementMatch.pop(ustensilElement);
        console.log(elementMatch);
      });
      recipeFilter(elementMatch);
    });
  });
}

function filterSearch(ingredientList, applianceList, ustensilList) {
  let searchTermsFilter = document.querySelectorAll(".filter-searchTerm");
  console.log(searchTermsFilter);
  searchTermsFilter.forEach((searchTermFilter) => {
    searchTermFilter.addEventListener("keyup", function () {
      let filterValue = searchTermFilter.value;
      console.log(filterValue);
      if (filterValue.length > 2) {
        ingredientList.forEach((ingredient) => {
          if (ingredient.innerText.indexOf(filterValue) !== -1) {
            ingredient.style.display = "block";
          } else {
            ingredient.style.display = "none";
          }
        });
        applianceList.forEach((appliance) => {
          if (appliance.innerText.indexOf(filterValue) !== -1) {
            appliance.style.display = "block";
          } else {
            appliance.style.display = "none";
          }
        });
        ustensilList.forEach((ustensil) => {
          if (ustensil.innerText.indexOf(filterValue) !== -1) {
            ustensil.style.display = "block";
          } else {
            ustensil.style.display = "none";
          }
        });
      }
    });
  });
}
