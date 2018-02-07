'use strict'

const Sequelize = require('sequelize')
const db = require('../index.js');

const Users = db.define('users', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  username: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  password: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
})

module.exports = Users;
