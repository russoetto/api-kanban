const Sequelize = require('sequelize');
const database = require('./dbConfig');

const Card = database.define('card', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  conteudo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lista: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Card;