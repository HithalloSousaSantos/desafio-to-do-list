import { Sequelize, Model, DataTypes } from 'sequelize';

export default function defineAtividade(sequelize: Sequelize) {
  const Atividade = sequelize.define('Atividade', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    concluido: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    dataInc: {
      type: DataTypes.DATE(4),
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    dataCon: {
      type: DataTypes.DATE(4),
      defaultValue: null,
    },
  },
  {
    tableName: 'atividade',
    timestamps: true,
    createdAt: 'dataInc',
    updatedAt: false,
  });
  return Atividade;
}