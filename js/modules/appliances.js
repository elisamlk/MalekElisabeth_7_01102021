export function addAppliances(recipes) {
    console.log(recipes)
  let applianceList = document.querySelector(".appliances-list");
  let appliancesArray = [];
  for (let i in recipes) {
    let appliances = recipes[i].appliance;
    appliancesArray.push(appliances);
  }
  let deleteDuplicates = new Set(appliancesArray);
  let newApplianceArray = [...deleteDuplicates];
  console.log(newApplianceArray);
  for (let i in newApplianceArray) {
    applianceList.innerHTML += `<p>${newApplianceArray[i]}</p>`;
  }
}
