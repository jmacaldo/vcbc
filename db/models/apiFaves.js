'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const apiFaves = db.define('apiFave', {
  apiID: {
    type: Sequelize.STRING,
    allowNull: true
  },
  label: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
});

module.exports = apiFaves;
