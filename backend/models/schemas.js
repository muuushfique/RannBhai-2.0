const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type:String},
    email: {type:String},
    website: {type:String},
    entryDate: {type:Date, default:Date.now}
})

const contactSchema = new Schema({
    email: {type:String,},
    website: {type:String,},
    message: {type:String,},
    entryDate: {type:Date, default:Date.now}
})

const FAQSchema = new Schema({
    question: {type:String},
    answer: {type:String},
})

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



// Define a schema for health recommendations
const HealthRecomSchema = new mongoose.Schema({
  recommendation: { type: String, required: true },
});

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



const Users = mongoose.model('Users', userSchema, 'users')
const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
// const Recipes = mongoose.model('Recipes', recipieSchema, 'recipe')

// Create a model for the "HealthRecom" collection
const HealthRecom = mongoose.model('HealthRecom', HealthRecomSchema, "HealthRecom");
//Israt
const GroceryStore = mongoose.model('GroceryStore', GroceryStoreSchema, 'stores' )
const FAQ = mongoose.model('FAQ', FAQSchema)
const Meal = mongoose.model('Meal', MealSchema)
//exporting Schemas
const mySchemas = {'Users':Users, 'Contact':Contact, 'Recommendations': HealthRecom, 'FAQ':FAQ, 'Meal':Meal, 'GroceryStore':GroceryStore }



module.exports = mySchemas
