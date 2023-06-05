import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/ProjetoToDoList', {
    logging: false
});

const models: { [key: string]: any} = {};

models.tabelaAtividade = require('./AtividadesModel')(sequelize);

sequelize.sync().then(() => {
    console.log('Tabela foi criada com sucesso!!');
}).catch((erro: Error) => {
    console.error(erro);
});

Object.keys(models).forEach((nomeModelo) => {
    if('associate' in models[nomeModelo]) {
        models[nomeModelo].associate(models);
    };
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;