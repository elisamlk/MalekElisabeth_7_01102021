export function ingredientFilter() {
  let tagSection = document.querySelector(".tags");
  let ingredientList = document.querySelectorAll(".ingredient");
  ingredientList.forEach((ingredient) => {
    ingredient.addEventListener("click", function () {
      let ingredientTag = ingredient.textContent;
      console.log(ingredientTag);
      tagSection.innerHTML += `<p class="ingredient-tag tag-style">${ingredientTag} <i class="far fa-times-circle"></i></p>`;
    });
  });
}

export function applianceFilter() {
  let tagSection = document.querySelector(".tags");
  let applianceList = document.querySelectorAll(".appliance");
  applianceList.forEach((appliance) => {
    appliance.addEventListener("click", function () {
      let applianceTag = appliance.textContent;
      console.log(applianceTag);
      tagSection.innerHTML += `<p class="appliance-tag tag-style">${applianceTag} <i class="far fa-times-circle"></i></p>`;
    });
  });
}

export function ustensilFilter() {
  let tagSection = document.querySelector(".tags");
  let ustensilList = document.querySelectorAll(".ustensil");
  console.log(ustensilList);
  ustensilList.forEach((ustensil) => {
    ustensil.addEventListener("click", function () {
      let ustensilTag = ustensil.textContent;
      console.log(ustensilTag);
      tagSection.innerHTML += `<p class="ustensil-tag tag-style">${ustensilTag} <i class="far fa-times-circle"></i></p>`;
    });
  });
}
