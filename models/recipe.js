var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecipeSchema   = new Schema({
     title: String,
     timeForCook: String,
     type: String,
     addOns: String,
     imageUrl: String,
     caption: String,
     ingredients: [
       {
        quantity: String,
        name: String,
        imageUrl: String
       },
       {
        quantity: String,
        name: String,
        imageUrl: String
       },
       {
        quantity: String,
        name: String,
        imageUrl: String
       },
       {
        quantity: String,
        name: String,
        imageUrl: String
       },
       {
        quantity: String,
        name: String,
        imageUrl: String
       }
   ]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
