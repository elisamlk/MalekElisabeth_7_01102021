export function addUstensils(recipes) {
  let ustensilsList = document.querySelector(".ustensils-list");
  let ustensilsArray = [];
  for (let i in recipes) {
    let ustensils = recipes[i].ustensils;
    for (let i in ustensils) {
      ustensilsArray.push(ustensils[i]);
    }
  }
  // Supprimer les doublons de la liste
  let deleteDuplicates = new Set(ustensilsArray);
  let newUstensilsArray = [...deleteDuplicates];
  // Trier par ordre alphabétique
  newUstensilsArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  for (let i in newUstensilsArray) {
    ustensilsList.innerHTML += `<p class="ustensil">${capitalize(
      newUstensilsArray[i]
    )}</p>`;
  }
}

function capitalize(sentence) {
  return sentence && sentence[0].toUpperCase() + sentence.slice(1)
}
