const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
});

module.exports = User;
