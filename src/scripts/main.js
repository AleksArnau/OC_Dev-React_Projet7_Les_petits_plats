import { recipeTemplate } from "./factory/recipeFactory.js";

// Fetches recipe data
async function getRecipes() {
  return fetch("../../data/recipes.json")
    .then((res) => res.json())
    .catch(console.error);
}

// Enables search by filtering recipes
function searchRecipes(recipes, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );
}

// Displays recipes in the DOM
async function displayData(recipes, searchTerm) {
  const recipeSection = document.querySelector(".recipeSection");
  recipeSection.innerHTML = ""; // Clear existing recipes

  const filteredRecipes = searchRecipes(recipes, searchTerm);
  filteredRecipes.forEach((recipe) => {
    recipeTemplate(recipe);
  });
}

// Runs on page load
async function init() {
  const recipes = await getRecipes();

  displayData(recipes, "");

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.querySelector(".buttonSearch");

  // Search by button click
  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    displayData(recipes, searchTerm);
  });
}

init();
