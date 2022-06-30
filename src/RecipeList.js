import React from "react";
import Recipe from "./Recipe"
function RecipeList({recipes, recipeDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photos</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* map through recipes, which come from 'const [recipes, setRecipes] = useState(RecipeData)'- from app.js
        the name/cuisine/photo/etc are props which we then spread to "Recipe.js" 
        recipe delete is function/prop also coming from app.js*/}
        <tbody id="tableBody">
          {recipes.map((props, i) => (
            <Recipe
              key={i}
              {...props}
              recipeDelete={recipeDelete}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
