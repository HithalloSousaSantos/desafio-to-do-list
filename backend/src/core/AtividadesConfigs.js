const models = require('../frameworks/sequelize/models/connectionBD');

async function listarAtividades() {
    const atividades = models.tabelaAtividade.findAll()
    return atividades;
}

async function listarAtividadesConcluidas() {
    const atividades = models.tabelaAtividade.findAll({
        where: {
            concluido: true
        },
        order: [['dataCon', 'DESC']]
    });
    return atividades;
}

async function listarAtividadesAndamento() {
    const atividades = models.tabelaAtividade.findAll({
        where: {
            concluido: false
        },
        order: [['dataInc', 'DESC']]
    });
    return atividades;
}

module.exports = {
    listarAtividades,
    listarAtividadesConcluidas,
    listarAtividadesAndamento
};
