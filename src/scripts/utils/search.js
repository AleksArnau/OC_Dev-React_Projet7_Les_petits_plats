export { searchRecipes };

// Enables search by filtering recipes
//try it out at https://jsben.ch/

function searchRecipes(recipes, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredients) =>
        ingredients.ingredient.toLowerCase().includes(searchTerm)
      )
  );
  return filteredRecipes;
}
