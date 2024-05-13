export { recipeTemplate };

function recipeTemplate(data) {
  const {
    id,
    image,
    name,
    servings,
    ingredients /*[{ingredient, quantity, unit}, {}]*/,
    time,
    description,
    appliance,
    ustensils /* [] */,
  } = data;

  let recipeIngredientsItems = "";
  ingredients.forEach((item) => {
    recipeIngredientsItems += `
    <div class="recipeIngredientsItems">
      <span class="recipeIngredientsName">${item.ingredient}</span>
      <span class="recipeIngredientsQuantity">${
        item.quantity !== undefined ? item.quantity : "-"
      } 
      ${item.unit !== undefined ? item.unit : ""}</span>
    </div>`;
  });

  const recipeList = document.querySelector(".recipeSection");
  recipeList.insertAdjacentHTML(
    "beforeend",
    `
    <article class="articleRecipe">
          <img alt="photo de ${name}" src="assets/images/${image}" /><span
            class="recipeDuration"
            >${time} min</span
          >
          <h2 class="recipeName">${name}</h2>
          <div class="recipeDescription">
            <h3>RECETTE</h3>
            ${description}
          </div>
          <div class="recipeIngredients">
            <h3>INGRÉDIENTS</h3>
            <div class="recipeIngredientsItems"></div>
            ${recipeIngredientsItems}
          </div>
        </div>
    `
  );
}
