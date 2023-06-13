import { Sequelize } from 'sequelize';
import defineAtividade from './AtividadesModel';

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/ProjetoToDoList', {
  logging: false
});

const models: { [key: string]: any } = {};

models.Atividade = defineAtividade(sequelize);

sequelize.sync().then(() => {
  console.log('Tabela criada');
}).catch((erro) => {
  console.error(erro);
});

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
