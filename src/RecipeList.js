import React from "react";

function RecipeList({ recipes, setRecipes }) {

  const deleteRecipe = (indexToDelete) => {
    return setRecipes(recipes.filter((_, index) => index !== indexToDelete)); // filters and removes desired index to delete
  };

  const rows = recipes.map(
    // maps through each ingridient index and adds the data from each index in the table as its own row.
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} alt="recipe" />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>
            delete
          </button>
        </td>
      </tr>
    )
  );

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
