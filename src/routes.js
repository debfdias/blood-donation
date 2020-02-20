const routes = require('express').Router();
const { User } = require('./models');
const UserController = require('./controllers/UserController');

routes.get('/', UserController.list);
routes.post('/user', UserController.store);
routes.delete('/user/:id', UserController.destroy);

module.exports = routes;