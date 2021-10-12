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
    this.ingredientList = recipes.ingredients.map((elt) => elt.ingredient);
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

  addIngredients() {
    let ingredientsList = document.querySelector(".ingredients-list");
    for (let i in this.ingredientList) {
      let allIngredients = this.ingredientList[i];
      ingredientsList.innerHTML += `<p>${allIngredients}</p>`;
    }
  }

  addAppliances() {
    let applianceList = document.querySelector(".appliance-list");
    applianceList.innerHTML += `<p>${this.appliance}</p>`;
  }

  addUstensils() {
    let ustensilsList = document.querySelector(".ustensils-list");
    for (let i in this.ustensils) {
      ustensilsList.innerHTML += `<p>${this.ustensils[i]}</p>`;
    }
  }
}


