export { searchRecipes };

// Enables search by filtering recipes
function searchRecipes(recipes, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );
}
