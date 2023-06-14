import { Request, Response } from "express";
import models from '../../frameworks/sequelize/models/connectionBD';
import { listarAtividadesAndamento } from "../../core/AtividadesConfigs";


// export const cadastroAtividade = (req: Request, res: Response): void => {
//     res.render('atividade');
// };  

export const cadastroAtividadeFeito = async (req: Request, res: Response): Promise<void> => {
    try {
        const { descricao } = req.body;
        await models.Atividade.create({
            descricao
        });
        res.json({ message: 'Atividade criada com sucesso!' });
        // res.redirect('/');
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu.');
    };
};

export const edicaoGet = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const atividade = await models.Atividade.findByPk(id);
    
    if (!atividade) {
        return res.render('404');
    };

    res.json({ atividade });
};

export const edicaoPost =async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    
    try {
        const { descricao } = req.body;
        await models.Atividade.update(
            { descricao, concluido: false, dataCon: null},
            { where: { id } }
        );
        res.json(id);
    } catch (erro) {
        console.log(erro);
        res.status(500).send('Algo inesperado aconteceu.');
    };
};

// export const concluidaGet = async (req: Request, res: Response): Promise<void> => {
//     const atividades = await listarAtividadesAndamento();
//     const editSuccess = req.app.locals.editSuccess || false;
//     res.render('atividadesAndamento', { atividades, editSuccess });
// };

export const concluidaPost =async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    try {
        await models.Atividade.update(
            { concluido: true, dataCon: new Date() },
            { where: { id } }
        );
        res.json({ message: 'Atividade concluida com sucesso' })
        // res.redirect(id);
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu.');
    };
};

export const deletarAtividade = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    try {
        await models.Atividade. destroy(
            { where: { id }}
        );
        res.json({ message: 'Atividade Deletada Com Sucesso!!' }); 
    } catch (erro) {
        console.log(erro);
        res.status(500).send('A atividade não foi exlcuída, confira o erro.');
    };
};