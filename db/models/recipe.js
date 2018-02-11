'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Recipe = db.define('recipes', {
  title: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  category: Sequelize.ARRAY(Sequelize.STRING),
  description: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  preparation: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  yield: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }

});

module.exports = Recipe;
