require("dotenv-safe").config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.disable('etag'); 
// Tive que utilizar essa configuração pois nos meus testes a requisição retornava status 301 not modified 
// toda vez que era repetida, o que parava na validação do FRONT que espera como correto status 200

app.listen(5000);