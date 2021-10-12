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



export function dropList() {
  let chevronsDownIngredients = document.querySelector(".chevron-ingredients");
  let dropDownIngredients = document.querySelector(".ingredients-list");
  chevronsDownIngredients.addEventListener("click", function () {
    let openList = chevronsDownIngredients.classList.toggle("is-open");
    if (openList == true) {
      dropDownIngredients.style.display = "block";
      chevronsDownIngredients.style.display = "none";
      let chevronUp = document.querySelector(".search-ingredients");
      let replaceChevron =
        (chevronUp.innerHTML += `<i class="fas fa-chevron-up"></i>`);
    } else {
      let chevronUpToHide = document.querySelector(".fas fa-chevron-up");
      chevronUpToHide.addEventListener("click", function(){
        console.log("hello");
      })
    }
  });
}
