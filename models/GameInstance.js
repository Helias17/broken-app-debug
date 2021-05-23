const GameModel = require('./game');
const {sequelize, Sequelize} = require('../db');

const Game = GameModel(sequelize, Sequelize);

module.exports = Game;