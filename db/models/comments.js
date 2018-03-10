'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Comments = db.define('comments', {
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cooktime: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  edamam_uri: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = Comments;
