//Esse meu arquivo está sendo responsável para criar a conexão com o BD e carregar o modelo.
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://Nomedousuário:Senha@Host:Porta/Nomedobancodedados', {
    logging: false
});

const models = {};

models.tabelaAtividade = require('./AtividadesModel')(sequelize);

sequelize.sync().then(() => {
    console.log('Tabela criada')
}).catch((erro) => {
    console.error(erro)
})

Object.keys(models).forEach((nomeModelo) => {
    if('associate' in models[nomeModelo]) {
        models[nomeModelo].associate(models);
    };
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;