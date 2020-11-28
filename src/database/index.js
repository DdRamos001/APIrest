
/* inicializa o mongoose (Pacote que utilizei para iniciar o mongoDB)
*/
const mongoose = require('mongoose');

/* Conecta a aplicação ao Banco de Dados */
mongoose.connect('mongodb://localhost/Cluster0', 
{useNewUrlParser: true,
useUnifiedTopology: true});

mongoose.Promise = global.Promise;

/* Exporta a conexão para a index principal e para o App  */
module.exports = mongoose;