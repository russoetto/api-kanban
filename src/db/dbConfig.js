const Sequelize = require('sequelize');
const config = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
})
 
module.exports = config;