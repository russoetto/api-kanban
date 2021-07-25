const { Router } = require('express');
const CardsController = require('./controllers/cardsController');
const LoginController = require('./controllers/loginController');

const routes = Router();
const loginController = new LoginController();
const cardsController = new CardsController();

routes.post('/login', loginController.login);

routes.get('/cards', cardsController.getCards);
routes.post('/cards', cardsController.postCard);
routes.put('/cards/:id', cardsController.putCard);
routes.delete('/cards/:id', cardsController.deleteCard);

module.exports = routes;