const UserModel = require('./user');
const {sequelize, Sequelize} = require('../db');

const User = UserModel(sequelize, Sequelize);

module.exports = User;