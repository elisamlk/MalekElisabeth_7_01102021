export function recipeFilter(elementMatch) {
  console.log(elementMatch);
  let recipeCards = document.querySelectorAll(".recipe-card");
  recipeCards.forEach((recipeCard) => {
    let allData = [];
    let ingredientsData = recipeCard.dataset.filterIngredients;
    let ustensilsData = recipeCard.dataset.filterUstensils;
    let appliancesData = recipeCard.dataset.filterAppliances;
    let recipeName = recipeCard.dataset.filterName;
    allData.push(
      ingredientsData.split(","),
      ustensilsData.split(","),
      appliancesData.split(","),
      recipeName.split(",")
    );
    let allDataString = allData.toString();
    recipeCard.style.display = "block";
    elementMatch.map((el) => {
      if (allDataString.includes(el) != true) {
        recipeCard.style.display = "none";
      }
    });
  });
}


