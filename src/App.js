import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"


function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const recipeDelete = (index) => {
    setRecipes(recipes.filter((_,i) => index !== i ))
  }

  const recipeAdd = (recipe) => {
    setRecipes([...recipes, recipe])

  }


  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>

      <RecipeList recipes={recipes}
        recipeDelete={recipeDelete} />
      <RecipeCreate recipeAdd={recipeAdd} />
    </div>
  );
}

export default App;
