import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);


  return (
    <div className="App">
      <>
      <header>
        <h1
          style={{
            // inline syles for header since it is very basic syling
            fontFamily: "Playfair Display SC",
            textAlign: "center",
            fontSize: "64px",
          }}
        >
          Delicious Food Recipes
        </h1>
      </header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
      </>
    </div>
  );
}

export default App;
