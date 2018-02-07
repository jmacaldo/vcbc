'use strict';

const Product = require('./product')
const Review = require('./review');
const Users = require('./users');

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, Users};
