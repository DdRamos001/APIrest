/* Node.js, Express, Body-parser, mongoose */

/* inclui as bibliotecas */
const express = require ('express'); 
const bodyParser = require('body-parser');

/* incia o express */

const app = express();

/* Atribui o body-parser ao Express para entender o formato JSON  */
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:false}));

// rotas

/* Atribui o controler a aplicação */
require('./controllers/authController')(app);

app.listen(3000);