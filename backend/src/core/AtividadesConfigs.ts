import models from '../frameworks/sequelize/models/connectionBD';

async function listarAtividades() {
  const atividades = await models.Atividade.findAll();
  return atividades;
}

async function listarAtividadesConcluidas() {
  const atividades = await models.Atividade.findAll({
    where: {
      concluido: true,
    },
    order: [['dataCon', 'DESC']],
  });
  return atividades;
}

async function listarAtividadesAndamento() {
  const atividades = await models.Atividade.findAll({
    where: {
      concluido: false,
    },
    order: [['dataInc', 'DESC']],
  });
  return atividades;
}

export {
  listarAtividades,
  listarAtividadesConcluidas,
  listarAtividadesAndamento,
};
