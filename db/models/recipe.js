'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Recipe = db.define('recipes', {
  title: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  tags: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  url: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  source: {
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
  },
  cooktime: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  featured: {
  	type: Sequelize.BOOLEAN,
  	allowNull: true
}
});

module.exports = Recipe;
