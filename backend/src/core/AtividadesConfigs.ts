import tabelaAtividade from '../frameworks/sequelize/models/connectionBD';

async function listarAtividades(){
    const atividades = await tabelaAtividade.findAll();
    return atividades;
};

async function listarAtividadesConcluidas() {
    const atividades = await tabelaAtividade.findAll({
        where: {
            concluido: true
        },
        order: [['dataCon', 'DESC']]
    });
    return atividades;
};

async function listarAtividadesAndamento() {
    const atividades = await tabelaAtividade.findAll({
        where: {
            concluido: false
        },
        order: [['dataInc', 'DESC']]
    });
    
    return atividades;
};

export {
    listarAtividades,
    listarAtividadesAndamento,
    listarAtividadesConcluidas
};