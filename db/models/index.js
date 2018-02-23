'use strict';

const Product = require('./product')
const Review = require('./review');
const Users = require('./users');
const Recipe = require('./recipe');
const Ingredients = require('./ingredients');
const Comments = require('./comments');


Product.hasMany(Review);
Review.belongsTo(Product);

Recipe.hasOne(Ingredients);
Ingredients.belongsTo(Recipe);

Users.hasMany(Recipe);
Recipe.belongsTo(Users);

Recipe.hasMany(Comments);
Comments.belongsTo(Recipe);

Users.hasMany(Comments);
Comments.belongsTo(Users);



module.exports = {Product, Review, Users, Recipe, Ingredients, Comments};
