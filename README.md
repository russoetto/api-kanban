# api-kanban

Instruções para utilização:

1 - Criar arquivo .env conforme o exemplo (.env.example), preenchendo o segredo para criptografia JWT e o login e senha utilizados.

2 - Instalar dependências do projeto:
(na pasta raiz do projeto)
> npm install

3 - Inicializar a API:
> npm start

Após isso, a API estará respondendo na porta 5000.

OBS: Utilizando a aplicação front-end disponibilizada, tive que fazer uma alteração na linha 23 do arquivo cardService.js
onde estava `Bearer ${token}` alterei para `Bearer ${token.toString()}` pois dessa forma envia corretamente o JWT.