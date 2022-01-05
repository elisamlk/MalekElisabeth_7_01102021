/*export function recipeFilter(elementMatch) {
  console.log(elementMatch);
  let recipeCards = document.querySelectorAll(".recipe-card");
  recipeCards.forEach((recipeCard) => {
    let allData = [];
    console.log(allData);
    let ingredientsData = recipeCard.dataset.filterIngredients;
    let ustensilsData = recipeCard.dataset.filterUstensils;
    let appliancesData = recipeCard.dataset.filterAppliances;
    allData.push(
      ingredientsData.split(","),
      ustensilsData.split(","),
      appliancesData.split(",")
    );
    let allDataString = allData.toString();
    console.log(allDataString);
    console.log(allDataString.includes(elementMatch));
    recipeCard.style.display = "block";
    for (let i in elementMatch) {
      if (allDataString.includes(elementMatch[i]) != true) {
        recipeCard.style.display = "none";
      }
    }
  });
}
*/

export function recipeFilter(elementMatch) {
  let recipeCards = document.querySelectorAll(".recipe-card");
  recipeCards.forEach((recipeCard) => {
    let allData = [];
    let ingredientsData = recipeCard.dataset.filterIngredients;
    let ustensilsData = recipeCard.dataset.filterUstensils;
    let appliancesData = recipeCard.dataset.filterAppliances;
    let recipeName = recipeCard.dataset.filterName;
    allData.push(
      ingredientsData
        .split(",")
        .concat(ustensilsData.split(","))
        .concat(appliancesData)
        .concat(recipeName)
    );
    console.log(allData)
    recipeCard.style.display = "block";
    for (let i in allData) {
      console.log(allData[i])
      for (let e in elementMatch) {
        console.log( elementMatch[e].split().concat())
        /*let allDataString = allData[i].toString();
        if (allData[i].indexOf(elementMatch[e]) === -1) {
        }
        */
        if (allData[i].includes(elementMatch[e]) != true) {
          recipeCard.style.display = "none";
        }
      }
    }
  });
}
