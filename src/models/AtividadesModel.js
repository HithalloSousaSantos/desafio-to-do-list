// Esse arquivo está definindo o meu modelo atividades com as colunas pedidas no projeto
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const tabelaAtividade = sequelize.define('atividade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    dataInc: {
        type: DataTypes.DATE(4),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dataCon: {
        type: DataTypes.DATE(4),
        defaultValue: null
    }
    }, {
        tableName: 'atividade',
        timestamps: true,
        createdAt: 'dataInc',
        updatedAt: false
    });

    return tabelaAtividade;
}