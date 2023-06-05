import models from '../models/connectionBD';

const conexaoBanco = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        models.sequelize.authenticate().then(() => {
            console.log('Conexão com o banco foi feita com sucesso!!!');
            resolve();
        }).catch((erro: any) => {
            console.log('A conexão com o banco falhou, olhar o log para saber o erro.' , erro);
            reject(erro);
        });
    });
};

export default conexaoBanco;