const express = require('express');
const {sequelize, Sequelize} = require('./db');
const userController = require('./controllers/usercontroller');
const gameController = require('./controllers/gamecontroller');
const UserModel = require('./models/user');
const GameModel = require('./models/game');

const port = process.env.PORT || 3000;

const User = UserModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);
sequelize.sync({ force: true });

const app = express();

app.use(require('body-parser'));
app.use('/api/auth', userController);
app.use(require('./middleware/validate-session'));
app.use('/api/game', gameController);
app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`);
})