const atividade = require('../models/AtividadesConfigs');


exports.index = async(require, response) => {
    const atividades = await atividade.listarAtividadesAndamento();
    response.render('atividadesAndamento', { atividades });
};