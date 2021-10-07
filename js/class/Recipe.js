export class Recipe {
  constructor(recipes) {
    this.id = recipes.id;
    this.name = recipes.name;
    this.servings = recipes.servings;
    this.ingredients = recipes.ingredients;
    this.time = recipes.time;
    this.description = recipes.description;
    this.appliance = recipes.appliance;
    this.ustensils = recipes.ustensils;
  }
  createRecipeCard() {
    let recipesList = document.querySelector(".recipes-list");
    recipesList.innerHTML += `<div class="recipe-card">
      <img src="https://res.cloudinary.com/dlpyn3wxf/image/upload/v1619104039/img-recipes_tqi94t.png">
      <div class="card-body">
        <div class="title">
          <h4>${this.name}</h4>
          <h4><i class="far fa-clock"></i>${this.time} min</h4>
        </div>
        <div class="description">
        <div class="ingredients">${this.ingredients
          .map(
            (elt) => `
        <p><b>${elt.ingredient} </b>:
        ${"quantity" in elt ? elt.quantity : ""}
        ${"unit" in elt ? elt.unit : ""}</p>`
          )
          .join(" ")}
          </div>
          <p class="recipe-description">${this.description}</p>
        </div>
      </div>
    </div>`;
  }
}
