import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../Customcss/TrendingRecipe.css";

function TrendingRecipe() {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:1240/api/trending-recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Handle like and dislike actions
  const handleVote = async (recipeId, voteType) => {
    try {
      const recipeToUpdate = recipes.find((recipe) => recipe.id === recipeId);

      if (!recipeToUpdate) return;

      const updatedVotes = {
        like_count:
          voteType === "like" ? recipeToUpdate.like_count + 1 : recipeToUpdate.like_count,
        dislike_count:
          voteType === "dislike" ? recipeToUpdate.dislike_count + 1 : recipeToUpdate.dislike_count,
      };

      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              like_count: updatedVotes.like_count,
              dislike_count: updatedVotes.dislike_count,
            }
          : recipe
      );
      setRecipes(updatedRecipes);

      await axios.put(
        `http://localhost:1240/api/recipe/vote/${recipeId}`,
        {
          like_count: updatedVotes.like_count,
          dislike_count: updatedVotes.dislike_count,
        }
      );

      const refreshedRecipes = await axios.get("http://localhost:1240/api/trending-recipes");
      setRecipes(refreshedRecipes.data);
    } catch (error) {
      console.error("Error updating votes:", error);
      alert("Failed to update vote. Please try again.");
    }
  };

  return (
    <div className="tr-trending-recipes">
      <h1 className="tr-title">Trending Recipes</h1>
      <div className="tr-recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="tr-recipe-card">
            <img
              src={recipe.image_link}
              alt={recipe.recipe_name}
              className="tr-recipe-image"
            />
            <div className="tr-recipe-content">
              <h3 className="tr-recipe-name">{recipe.recipe_name}</h3>
              <p className="tr-recipe-info">
                <strong>Cuisine:</strong> {recipe.cuisine}
              </p>
              <p className="tr-recipe-info">
                <strong>Diet:</strong> {recipe.diet_type}
              </p>
              <div className="tr-recipe-actions">
                <button
                  className="tr-btn tr-btn-like"
                  onClick={() => handleVote(recipe.id, "like")}
                >
                  Like {recipe.like_count}
                </button>
                <button
                  className="tr-btn tr-btn-dislike"
                  onClick={() => handleVote(recipe.id, "dislike")}
                >
                  Dislike {recipe.dislike_count}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingRecipe;
