const express = require('express');
const cors = require('cors');
const {sequelize, Sequelize} = require('./db');
const userController = require('./controllers/usercontroller');
const gameController = require('./controllers/gamecontroller');
const GameModel = require('./models/game');
const User = require('./models/UserInstance');
const Game = require('./models/GameInstance');

const port = process.env.PORT || 3000;

sequelize.sync({ force: true });

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', userController);
app.use(require('./middleware/validate-session'));
app.use('/api/game', gameController);
app.use((req, res) => res.status(404).send('Incorrect request!'));

app.listen(port, () => {
    console.log(`Server has been started on port ${port}...`);
})