//Parte das importações
const express = require('express');
const app = express(); 
const routes = require('./routes');
const path = require('path');
const models = require('./src/models/connectionBD');

//Autenticação feita com o banco de dados, para saber se conectou ou não.
models.sequelize.authenticate().then(() => {
    console.log('Conexão com o banco feita com sucesso');
    app.emit('pronto');
}).catch((erro) => {
    console.log('A conexão com o banco falhou: ', erro);
});

//É usado para analisar o corpo de solicitação HTTP e fazer com que os dados 
//enviados pelo formulário estejam disponíveis em req.body. O parâmetro extended determina se a 
// biblioteca deve analisar codificações de URL codificadas (como foo=bar&baz=qux) ou 
// se deve analisar codificações de formulário codificadas (como foo=bar e baz=qux separados por &).
app.use(express.urlencoded({ extended: true }));

//Usado para especificar o diretorio raiz do arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Definindo o diretorio onde pode ser encontrado os templates
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.locals.editSuccess = false;

app.use(routes);


// Liga o servidor só depois de validar se o banco foi conectado ou não
app.on('pronto', () => {
    app.listen(3003, () => {
        console.log('Acessar http://localhost:3003')
        console.log('Servidor executando na porta 3003.')
    });    
});
