const models = require('../../frameworks/sequelize/models/connectionBD');
const atividade = require('../../core/AtividadesConfigs');

// Controller da criação de atividades
exports.register = (req, res) => {
    res.render('atividade');
}

exports.atividade = async (req, res) => {
    try {
        const { descricao } = req.body;
        await models.tabelaAtividade.create({
            descricao
        });
        res.redirect('/')
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu')
    }
}

// Controller da edição de atividades
exports.editG = async (req, res) => {
    const id = req.params.id;
    const atividade = await models.tabelaAtividade.findByPk(id);
    if(!atividade) {
        return res.render('404');
    }
    const editSuccess = req.app.locals.editSuccess || false;
    req.app.locals.editSuccess = false;
    res.render('atividadeEditar', { atividade, editSuccess });
}

exports.editP = async (req, res) => {
    const id = req.params.id;
    try {
        const { descricao } = req.body
        await models.tabelaAtividade.update(
            { descricao, concluido: false, dataCon: null},
            { where: { id } }
            );
        req.app.locals.editSuccess = true;
        res.redirect(id);
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu');
    }
}

// Controller da conclusão de atividades
exports.concluidaG = async(require, response) => {
    const atividades = await atividade.listarAtividadesAndamento();
    const editSuccess = require.app.locals.editSuccess || false;
    response.render('atividadesAndamento', { atividades, editSuccess});
};

exports.concluidaP = async (req, res) => {
    const id = req.params.id;
    try {
        await models.tabelaAtividade.update(
            { concluido: true, dataCon: new Date() },
            { where: { id }}
        );
        req.app.locals.editSuccess = true;
        res.redirect(id);
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu');
    }
}

// Controller da exclusão de atividades
exports.delete = async(require, response) => {
    const id = require.params.id;

    try {
        await models.tabelaAtividade.destroy(
            { where: { id } }
        );
        const mensagem = 'Atividade excluida com sucesso!!'
        response.redirect('/');
    } catch (erro) {
        console.log(erro);
        response.status(500).send('A atividade não foi excluida, erro!')
    }
}