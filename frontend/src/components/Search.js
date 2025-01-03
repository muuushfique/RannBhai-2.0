import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const Search = () => {
  // Separate states for each search field
  const [recipeNameQuery, setRecipeNameQuery] = useState("");
  const [ingredientQuery, setIngredientQuery] = useState("");
  const [cuisineQuery, setCuisineQuery] = useState("");
  const [dietTypeQuery, setDietTypeQuery] = useState("");
  const [caloriesQuery, setCaloriesQuery] = useState("");

  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // Handle search submission for each field
  const handleSearchSubmit = async (e, searchType, query) => {
    e.preventDefault();
  
    if (query.trim() === "") {
      setError("Please enter a search term.");
      return;
    }
  
    try {
      const response = await axios.get(`http://localhost:1240/${searchType}`, {
        params: { q: query },
      });
      setError(null);
      setSearchResults(response.data);
    } catch (err) {
      setError(err.response?.data.message || "Error searching for recipe.");
    }
  };

  return (
    <div>
      <h2>Search Recipes</h2>

      {/* Search by Recipe Name */}
      <form
        onSubmit={(e) =>
          handleSearchSubmit(e, "search-recipe-name", recipeNameQuery)
        }
      >
        <input
          type="text"
          placeholder="Search by recipe name"
          value={recipeNameQuery}
          onChange={(e) => setRecipeNameQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Search by Ingredient */}
      <form
        onSubmit={(e) =>
          handleSearchSubmit(e, "search-ingredient", ingredientQuery)
        }
      >
        <input
          type="text"
          placeholder="Search by ingredient"
          value={ingredientQuery}
          onChange={(e) => setIngredientQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Search by Cuisine */}
      <form
        onSubmit={(e) => handleSearchSubmit(e, "search-cuisine", cuisineQuery)}
      >
        <input
          type="text"
          placeholder="Search by cuisine"
          value={cuisineQuery}
          onChange={(e) => setCuisineQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Search by Diet Type */}
      <form
        onSubmit={(e) =>
          handleSearchSubmit(e, "search-diet-type", dietTypeQuery)
        }
      >
        <input
          type="text"
          placeholder="Search by diet type"
          value={dietTypeQuery}
          onChange={(e) => setDietTypeQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>


<form
  onSubmit={(e) =>
    handleSearchSubmit(e, "search-calories", caloriesQuery)
  }
>
  <input
    type="text"
    placeholder="Search by calories"
    value={caloriesQuery}
    onChange={(e) => setCaloriesQuery(e.target.value)}
  />
  <button type="submit">Search</button>
</form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Search Results */}
      <div>
        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          <ul>
            {searchResults.map((recipe) => (
              <li key={recipe._id}>
                {/* Make the recipe name a link to RecipeDetails.js */}
                <Link to={`/RecipeDetails/${recipe._id}`}>
                  {recipe.recipe_name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;