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
  }
})

module.exports = Comments;
