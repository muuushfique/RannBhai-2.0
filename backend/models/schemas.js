const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Contact Schema
const contactSchema = new Schema({
   email: { type: String, required: true },
   website: { type: String, required: true },
   message: { type: String, required: true },
   entryDate: { type: Date, default: Date.now },
});

// Recipe Schema
const recipeSchema = new Schema({
   id: { type: Number, required: true },
   recipe_name: { type: String, required: true },
   no_of_servings: { type: Number, required: true },
   ingredient_list: [{ type: String, required: true }],
   cuisine: { type: String, required: true },
   diet_type: { type: String, required: true },
   general_pricing: { type: Number, required: true },
   recipe_procedure: {
       from: { type: String, required: true },
       by: { type: String, required: true },
       instructions: { type: String, required: true },
   },
   image_link: { type: String, required: true },
   calories: { type: Number, required: true },
   review_list: [
       {
           reviewer: { type: String, required: true },
           rating: { type: Number, required: true },
           comment: { type: String, required: true },
       },
   ],
   like_count: { type: Number, default: 0 },
   dislike_count: { type: Number, default: 0 },
});

const ingredientSchema = new Schema({
    id: { type: Number, required: true },
    ingredient: { type: String, required: true },
    nutrition: {
        calories: { type: Number, required: true },
        protein: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        fats: { type: Number, required: true },
        fiber: { type: Number, required: true },
        calcium: { type: Number, required: true },
        minerals: { type: Number, required: true },
    },
    category: { type: String, required: true }, // 'veg' or 'non-veg'
 });

const recipieSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  recipe_name: {
    type: String,
    required: true
  },
  no_of_servings: {
    type: Number,
    required: true
  },
  ingredient_list: {
    type: [String], 
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  diet_type: {
    type: String,
    
    required: true
  },
  general_pricing: {
    type: Number,
    required: true
  },
  recipe_procedure: {
    from: { type: String, required: true },
    by: { type: String, required: true },
    instructions: { type: String, required: true }
  },
  image_link: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  review_list: [
    {
      reviewer: { type: String, required: true },
      rating: { type: Number, required: true, min: 1, max: 5 }, 
      comment: { type: String, required: true }
    }
  ],
  like_count: {type: Number, default: 0},
  dislike_count: {type: Number, default: 0},
  reports: [
    {
      message: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ], // New field for storing reports
});

// Define a schema for health recommendations
const HealthRecomSchema = new mongoose.Schema({
  disease: {
    type: String,
    required: true, // Disease name is required
    unique: true,   // Each disease should be unique
  },
  health_practice: {
    type: String,
    required: true, // Health practice is required
  }
}, { timestamps: true });

const glossarySchema = new Schema({
    term: {
      type: String,
      required: true, 
      unique: true, 
    },
    definition: {
      type: String,
      required: true, 
    },
    
  }, { timestamps: true }); 

//Ipsit
const GroceryStoreSchema = new Schema({
  name: { type: String, require: true },
  address: { type: String, require: true },
  location: {
    type: { type: String, enum: ['Point'], require: true },
    coordinates: { type: [Number], require: true }
  }
})
GroceryStoreSchema.index({ location: '2dsphere' }); // Enable geospatial queries

const aboutSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
}); 
const FAQSchema = new Schema({
  question: {type:String},
  answer: {type:String},
})
const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  calories: { type: Number, required: true },
  image: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Breakfast', 'Lunch', 'Dinner']
},
});

const RecipeSubmitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: Array, required: true },
  steps: { type: Array, required: true },
  calories: { type: Number, required: true },
  tags: { type: Array, default: [] },
  imageLink: { type: String, requird: true },
  
});


//for login/signup
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});
  
const User = mongoose.model('User', userSchema, 'user')
const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
const Recipe = mongoose.model('Recipe', recipieSchema, 'recipe');
const CookingGlossary = mongoose.model('CookingGlossary', glossarySchema, 'cooking_glossary');
const HealthRecom = mongoose.model('HealthRecom', HealthRecomSchema, "HealthRecom");
//Ipsit
const GroceryStore = mongoose.model('GroceryStore', GroceryStoreSchema, 'stores' )
const About = mongoose.model('About', aboutSchema, 'about_us');
const FAQ = mongoose.model('FAQ', FAQSchema)
const Meal = mongoose.model('Meal', MealSchema)
const RecipeSubmit= mongoose.model('RecipeSubmit', RecipeSubmitSchema, 'RecipeSubmit')
const Ingredient = mongoose.model('Ingredient', ingredientSchema, 'Ingredients');

const mySchemas = {'User':User, 'Contact':Contact, 'Recommendations': HealthRecom, 'Recipe':Recipe, 'CookingGlossary':CookingGlossary, 'GroceryStore':GroceryStore, 'About':About, 'FAQ':FAQ, 'Meal':Meal, 'RecipeSubmit':RecipeSubmit, 'Ingredient': Ingredient}


module.exports = mySchemas


