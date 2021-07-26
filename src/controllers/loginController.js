const jwt = require('jsonwebtoken');

module.exports = class LoginController { 
  login(request, response) {
    if (request.body.login === process.env.LOGIN && request.body.senha === process.env.SENHA) {
      let token = jwt.sign(process.env.LOGIN, process.env.SECRET);
      response.status(200).json(token);
    } else {
      response.status(401).json({ message: 'Login inválido' })
    }
  }

  validateToken(request, response, next) {
    let token = request.headers['authorization'];
    token = token.replace('Bearer ', '');
    if (!token) {
      response.status(401).json({ message: 'Token não preenchido'});
    }
    else {
      jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) {
          response.status(401).json({ message: 'Token inválido'});
        } else {
          next();
        }
      });
    }
  }
}