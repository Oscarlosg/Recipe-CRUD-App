import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const [NewRecipe, setNewRecipe] = useState({
    // state to store form data so it can be passed to the master recipes state.
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  function handleChange(event) {
    // adds inputted data into the corresponding key in the new recipe state
    const { target } = event;
    setNewRecipe({ ...NewRecipe, [target.name]: target.value });
  }

  function handleSubmit(event) {
    // adds new recipe to the master recipe state and resets state to its original state once the data has been passed to the master recipe state
    event.preventDefault();
    setRecipes([...recipes, NewRecipe]);
    setNewRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  }


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={NewRecipe.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  value={NewRecipe.cuisine}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  value={NewRecipe.photo}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  value={NewRecipe.ingredients}
                  onChange={handleChange}
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  placeholder="Preparation"
                  value={NewRecipe.preparation}
                  onChange={handleChange}
                  required
                />
              </label>
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
