import { Request, Response } from "express";
import  tabelaAtividade  from '../../frameworks/sequelize/models/connectionBD';
import { listarAtividadesAndamento } from "../../core/AtividadesConfigs";


export const cadastroAtividade = (req: Request, res: Response): void => {
    res.render('atividade');
};

export const cadastroAtividadeFeito = async (req: Request, res: Response): Promise<void> => {
    try {
        const { descricao } = req.body;
        await tabelaAtividade.create({
            descricao
        });
        res.redirect('/');
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu.');
    };
};

export const edicaoGet = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const atividade = await tabelaAtividade.findByPk(id);
    
    if (!atividade) {
        return res.render('404');
    };

    const editSuccess = req.app.locals.editSuccess || false;
    req.app.locals.editSuccess = false;
    res.render('atividadeEditar', { atividade, editSuccess});
};

export const edicaoPost =async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    
    try {
        const { descricao } = req.body;
        await tabelaAtividade.update(
            { descricao, concluido: false, dataCon: null},
            { where: { id } }
        );
        req.app;localStorage.editSuccess = true;
        res.redirect(id);
    } catch (erro) {
        console.log(erro);
        res.status(500).send('Algo inesperado aconteceu.');
    };
};

export const concluidaGet = async (req: Request, res: Response): Promise<void> => {
    const atividades = await listarAtividadesAndamento();
    const editSuccess = req.app.locals.editSuccess || false;
    res.render('atividadesAndamento', { atividades, editSuccess });
};

export const concluidaPost =async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    try {
        await tabelaAtividade.update(
            { concluido: true, dataCon: new Date() },
            { where: { id } }
        );
        req.app.locals.editSuccess = true;
        res.redirect(id);
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Algo inesperado aconteceu.');
    };
};

export const deletarAtividade =async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    try {
        await tabelaAtividade.destroy(
            { where: { id }}
        );
        console.log('Atividade foi excluída com exito!!');
        res.redirect('/');
    } catch (erro) {
        console.log(erro);
        res.status(500).send('A atividade não foi exlcuída, confira o erro.');
    };
};