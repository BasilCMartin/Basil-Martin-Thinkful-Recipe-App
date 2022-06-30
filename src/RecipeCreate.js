import React, { useState } from "react";

function RecipeCreate({recipeAdd}) {

  const recipeForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] =useState({...recipeForm})
  const { name, cuisine, photo, ingredients, preparation } = formData;

  const handleChange = (each) => {
    setFormData({
      ...formData,
      [each.target.name]: each.target.value,
    });
  };
//checks if all inputs are filled
//prevents refresh
  const handleSubmit = (each) => {
    each.preventDefault();
    const isComplete = () => {
      return name && cuisine && photo && ingredients && preparation
    }
//throw alert if entries not complete
    if(!isComplete()){
      alert('All entries are required')

    }else{
      const recipe = {
        name,
        cuisine,
        photo,
        preparation,
        ingredients,
      };

      setFormData({...recipeForm})
      recipeAdd(recipe);

    }


  };

  //each prop of recipe data becomes it's own td(table data cell), they are all contained in a row
  return (
    <form name="create" onSubmit={handleSubmit}>
  <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="name"
                value={name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                onChange={handleChange}
                placeholder="cuisine"
                value={cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="text"
                onChange={handleChange}
                placeholder="URL"
                value={photo}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                placeholder="preparation"
                value={preparation}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                placeholder="ingredients"
                value={ingredients}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
