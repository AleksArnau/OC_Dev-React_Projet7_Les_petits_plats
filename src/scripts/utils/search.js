export { searchRecipes };

// Enables search by filtering recipes
//try it out at https://jsben.ch/
function searchRecipes(recipes, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const filteredRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (recipe.name.toLowerCase().includes(searchTerm)) {
      filteredRecipes.push(recipe);
    }
  }
  return filteredRecipes;
}
