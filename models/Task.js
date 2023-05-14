const Sequelize = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  dueDate: Sequelize.DATE,
  priority: Sequelize.STRING
});

module.exports = Task;
