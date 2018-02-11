'use strict';

const Product = require('./product')
const Review = require('./review');
const Users = require('./users');
const Recipe = require('./recipe');
const Ingredients = require('./ingredients');


Product.hasMany(Review);
Review.belongsTo(Product);

Recipe.hasOne(Ingredients);
Ingredients.belongsTo(Recipe);

module.exports = {Product, Review, Users, Recipe, Ingredients};
