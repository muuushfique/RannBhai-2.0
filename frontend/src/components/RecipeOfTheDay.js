import React from 'react';
import '../css/RecipeOfTheDay.css';

const RECIPES = [
  {
    id: 1,
    name: "Lemon Herb Roasted Chicken",
    time: "1 hour 15 minutes",
    difficulty: "Medium",
    ingredients: [
      "1 whole chicken",
      "2 lemons",
      "Fresh herbs (rosemary, thyme)",
      "Garlic cloves",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: "Pat chicken dry, stuff with lemon and herbs, roast at 375°F until golden.",
    servings: "4-6 people",
    calories: "380 per serving",
    imageUrl: "https://www.foodandwine.com/thmb/t9YqzGbmH-huAbV6xitCQs0-G4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-herb-and-lemon-roasted-chicken-hero-c4ba0aec56884683be482c47b1e1df11.jpg", // Add actual image URLs
    tips: "For extra flavor, marinate the chicken overnight",
    tags: ["Dinner", "Healthy", "Family-Friendly"]
  },
  {
    id: 2,
    name: "Butternut Squash Risotto",
    time: "45 minutes",
    difficulty: "Medium",
    ingredients: [
      "Arborio rice",
      "Butternut squash",
      "White wine",
      "Vegetable stock",
      "Parmesan cheese",
      "Sage leaves"
    ],
    instructions: "Roast squash, gradually add stock to rice, finish with parmesan and crispy sage.",
    servings: "4-6 people",
    calories: "380 per serving",
    imageUrl: "https://www.foodandwine.com/thmb/t9YqzGbmH-huAbV6xitCQs0-G4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-herb-and-lemon-roasted-chicken-hero-c4ba0aec56884683be482c47b1e1df11.jpg", // Add actual image URLs
    tips: "For extra flavor, marinate the chicken overnight",
    tags: ["Dinner", "Healthy", "Family-Friendly"]
  },
  {
    id: 3,
    name: "Dark Chocolate Lava Cakes",
    time: "30 minutes",
    difficulty: "Hard",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Sugar",
      "Flour",
      "Vanilla extract"
    ],
    instructions: "Melt chocolate and butter, mix with other ingredients, bake until edges are set but center is gooey.",
    servings: "4-6 people",
    calories: "380 per serving",
    imageUrl: "https://www.foodandwine.com/thmb/t9YqzGbmH-huAbV6xitCQs0-G4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-herb-and-lemon-roasted-chicken-hero-c4ba0aec56884683be482c47b1e1df11.jpg", // Add actual image URLs
    tips: "For extra flavor, marinate the chicken overnight",
    tags: ["Dinner", "Healthy", "Family-Friendly"]
  }
];

const RecipeOfTheDay = () => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const recipeIndex = seed % RECIPES.length;
  const recipe = RECIPES[recipeIndex];

  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <div className="recipe-date">
          {today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        <h1 className="recipe-title">Recipe of the Day</h1>
      </header>

      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      {recipe.imageUrl && (
        <div className="recipe-image">
          <img src={recipe.imageUrl} alt={recipe.name} />
        </div>
      )}

      <div className="recipe-info">
        <span>👥 Servings: {recipe.servings}</span>
        <span>🔥 Calories: {recipe.calories}</span>
      </div>

      <div className="recipe-card">
        <h2 className="recipe-name">{recipe.name}</h2>

        <div className="recipe-metadata">
          <span>⏱️ {recipe.time}</span>
          <span>📊 {recipe.difficulty}</span>
        </div>

        <div className="recipe-section">
          <h3 className="section-title">Ingredients</h3>
          <ul className="recipe-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="recipe-list-item">{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-section">
          <h3 className="section-title">Instructions</h3>
          <p className="recipe-instructions">{recipe.instructions}</p>
        </div>
        <div className="recipe-tips">
          <h3 className="section-title">Chef's Tips</h3>
          <p>{recipe.tips}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeOfTheDay;