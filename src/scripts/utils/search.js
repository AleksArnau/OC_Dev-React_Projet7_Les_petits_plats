export { searchRecipes };

// Enables search by filtering recipes
//try it out at https://jsben.ch/
function searchRecipes(recipes, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );
}
