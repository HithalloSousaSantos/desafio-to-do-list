const atividade = require('../models/AtividadesConfigs');


exports.index = async(require, response) => {
    const atividades = await atividade.listarAtividadesConcluidas();
    response.render('atividadesConcluidas', { atividades });
};