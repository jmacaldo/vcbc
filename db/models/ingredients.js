'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Ingredient = db.define('ingredients', {
  quantity: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  measure: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  item: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  prep: {
  	type: Sequelize.STRING,
  	allowNull: false
  },

});

module.exports = Ingredient;
