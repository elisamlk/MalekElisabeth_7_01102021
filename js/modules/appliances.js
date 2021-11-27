export function addAppliances(recipes) {
  let applianceList = document.querySelector(".appliances-list");
  let appliancesArray = [];
  for (let i in recipes) {
    let appliances = recipes[i].appliance;
    appliancesArray.push(appliances);
  }
  // Supprimer les doublons de la liste
  let deleteDuplicates = new Set(appliancesArray);
  let newApplianceArray = [...deleteDuplicates];
  // Trier par ordre alphabétique
  newApplianceArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  for (let i in newApplianceArray) {
    applianceList.innerHTML += `<p class="appliance">${newApplianceArray[i]}</p>`;
  }
}
