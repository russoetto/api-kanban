const moment = require('moment');

module.exports = class ApiController {
  registerLog(request, response) {
    let datetime = moment().format('DD/MM/YYYY hh:mm:ss');
    let idCard = request.body.card.id;
    let tituloCard = request.body.card.titulo;
    let acao = request.method === 'DELETE' ? 'Removido' : 'Alterado';
    
    console.log(`> ${datetime} - Card ${idCard} - ${tituloCard} - ${acao}`);

    if (request.method === 'DELETE')
      response.status(200).json(request.body.cards);
    else
      response.status(200).json(request.body.card);
  }
};