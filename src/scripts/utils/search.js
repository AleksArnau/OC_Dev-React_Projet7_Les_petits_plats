export { searchRecipes };

// Enables search by filtering recipes
//try it out at https://jsben.ch/
function searchRecipes(recipes, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const filteredRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredients) =>
        ingredients.ingredient.toLowerCase().includes(searchTerm)
      )
    ) {
      filteredRecipes.push(recipe);
    }
  }
  return filteredRecipes;
}

//       recipe.name.toLowerCase().includes(searchTerm) ||
//       recipe.appliance.toLowerCase().includes(searchTerm) ||
//       recipe.description.toLowerCase().includes(searchTerm) ||
//       recipe.ingredients.some((ingredients) =>
//         ingredients.ingredient.toLowerCase().includes(searchTerm)
//       ) ||
//       recipe.ustensils.some((ustensil) =>
//         ustensil.toLowerCase().includes(searchTerm)
//       )
