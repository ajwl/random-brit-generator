
function getPosition(chosenInput, categories ){
  if(categories.includes("White")) {
    const cleanCategories = formatEthnicity(categories);
    return cleanCategories.indexOf(chosenInput.toLowerCase());
  }
  else { return categories.indexOf(chosenInput) }
}

function formatEthnicity(categories){
  return categories.map(c => c.toLowerCase());
}


export {getPosition}
