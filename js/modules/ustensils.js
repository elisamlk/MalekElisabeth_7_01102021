export function addUstensils(recipes) {
  let ustensilsList = document.querySelector(".ustensils-list");
  let ustensilsArray = [];
  for (let i in recipes) {
    let ustensils = recipes[i].ustensils;
    for (let i in ustensils) {
      ustensilsArray.push(ustensils[i]);
    }
  }
  let deleteDuplicates = new Set(ustensilsArray);
  let newUstensilsArray = [...deleteDuplicates];
  for (let i in newUstensilsArray) {
    ustensilsList.innerHTML += `<p class="ustensil">${newUstensilsArray[i]}</p>`;
  }
}
