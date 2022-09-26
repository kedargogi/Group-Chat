const Sequelize = require('sequelize');

const sequelize = new Sequelize('groupchat','root','Password@91',{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;