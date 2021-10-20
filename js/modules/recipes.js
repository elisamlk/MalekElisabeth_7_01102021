export function createRecipeCard(recipes) {
    for (let i in recipes) {
      let recipesList = document.querySelector(".recipes-list");
      recipesList.innerHTML += `<div class="recipe-card">
              <img src="https://res.cloudinary.com/dlpyn3wxf/image/upload/v1619104039/img-recipes_tqi94t.png">
              <div class="card-body">
                <div class="title">
                  <h4>${recipes[i].name}</h4>
                  <h4><i class="far fa-clock"></i>${recipes[i].time} min</h4>
                </div>
                <div class="description">
                <div class="ingredients">${recipes[i].ingredients
                  .map(
                    (elt) => `
                <p><b>${elt.ingredient} </b>:
                ${"quantity" in elt ? elt.quantity : ""}
                ${"unit" in elt ? elt.unit : ""}</p>`
                  )
                  .join(" ")}
                  </div>
                  <p class="recipe-description">${recipes[i].description}</p>
                </div>
              </div>
            </div>`;
    }
  }
  