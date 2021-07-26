const { v4: uuidv4 } = require('uuid');
const database = require('../db/dbConfig');
const Card = require('../db/modelCard');

database.sync();

module.exports = class CardsController {
  async getCards(request, response) {
    try {
      let cards = await Card.findAll();
      response.status(200).json(cards);
    } catch (err) {
      response.status(500).json({ message: err.toString() })
    }
  }

  async postCard(request, response) {
    try {
      if (request.body && request.body.titulo && request.body.conteudo && request.body.lista && !request.body.id) {
        let card = {
          id: uuidv4(),
          titulo: request.body.titulo,
          conteudo: request.body.conteudo,
          lista: request.body.lista
        }

        await Card.create(card);
        response.status(201).json(card);
      } else {
        response.status(400).json({ message: 'Card inválido.'});
      }
    } catch (err) {
      response.status(500).json({ message: err.toString() });
    }
  }

  async putCard(request, response, next) {
    if (request.params.id && request.body.id === request.params.id) {
      if (request.body.titulo && request.body.conteudo && request.body.lista) {
        let card = await Card.findByPk(request.body.id);
        if (card) {
          try {
            card.titulo = request.body.titulo;
            card.conteudo = request.body.conteudo;
            card.lista = request.body.lista;
            await card.save();
            request.body.card = card;
            next();
          } catch (err) {
            response.status(500).json({ message: err.toString() });
          }
        } else {
          response.status(404).json({ message: 'Card não encontrado' });
        }
      } else {
        response.status(400).json({ message: 'Campos inválidos' });
      }
    } else {
      response.status(400).json({ message: 'Id inválido' });
    }
  }

  async deleteCard(request, response, next) {
    if (request.params.id) {
      let cards = await Card.findAll();
      let card = cards.find(c => c.id === request.params.id);
      if (card) {
        card.destroy();
        cards.splice(cards.indexOf(card), 1);
        request.body.card = card;
        request.body.cards = cards;
        next();
      } else {
        response.status(404).json({ message: 'Card não existente' });
      }
    } else {
      response.status(400).json({ message: 'Id inválido' });
    }
  }
}