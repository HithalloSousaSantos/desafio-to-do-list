const atividade = require('../models/AtividadesConfigs');

exports.index = async(require, response) => {
    const atividades = await atividade.listarAtividades();
    response.render('index', { atividades });
};
