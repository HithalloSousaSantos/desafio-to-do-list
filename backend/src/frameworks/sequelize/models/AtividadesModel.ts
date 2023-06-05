import { DataTypes, Model, Sequelize } from 'sequelize';

interface AtividadeAttributes {
    id: number,
    descricao: string,
    concluido: boolean,
    dataInc: Date;
    dataCon: Date | null;
};

class TabelaAtividade extends Model<AtividadeAttributes> implements AtividadeAttributes {
    public id!: number;
    public descricao!: string;
    public concluido!: boolean;
    public dataInc!: Date;
    public dataCon!: Date | null;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {

    };
};

export default function (sequelize: Sequelize) {
    TabelaAtividade.init(
        {
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
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
              },
              dataCon: {
                type: DataTypes.DATE,
                defaultValue: null
              } 
        },
        {
            sequelize,
            tableName: 'atividade',
            timestamps: true,
            createdAt: 'dataInc',
            updatedAt: false 
        }
    );

    return TabelaAtividade;
};
