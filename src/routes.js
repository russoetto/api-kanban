const { Router } = require('express');
const ApiController = require('./controllers/apiController');
const CardsController = require('./controllers/cardsController');
const LoginController = require('./controllers/loginController');

const routes = Router();
const loginController = new LoginController();
const cardsController = new CardsController();
const apiController = new ApiController();

routes.post('/login', loginController.login);

routes.get('/cards', loginController.validateToken, cardsController.getCards);
routes.post('/cards', loginController.validateToken, cardsController.postCard);
routes.put('/cards/:id', loginController.validateToken, cardsController.putCard, apiController.registerLog);
routes.delete('/cards/:id', loginController.validateToken, cardsController.deleteCard, apiController.registerLog);

module.exports = routes;