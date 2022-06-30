import React from "react";
import "./App.css";


function Recipe({name, cuisine, photo, preparation, ingredients, recipeDelete, index }) {
//name/cusine/photos etc come from props which we will access as an argument into function definition

  //tr is table row
  //td is table data cell
  return (
<tr id= "listEntry">
<td>{name}</td>
      <td>{cuisine}</td>
      <td><img style={{objectFit: "contain", width: "100%", height: "100%"}} src={photo} alt="Food" /></td>
      <td>{preparation}</td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td>
        <button name="delete" onClick={() => recipeDelete(index)}>
          Delete
        </button>
      </td>



</tr>
  );
}

export default Recipe;