export function recipeFilter(elementMatch) {
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
