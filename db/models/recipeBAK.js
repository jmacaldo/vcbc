'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Recipe = db.define('recipes', {
  title: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  category: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
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
  },
  img: {
  	type: Sequelize.STRING,
  	allowNull: false
  }

});

module.exports = Recipe;
