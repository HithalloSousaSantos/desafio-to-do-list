import { Request, Response } from 'express';
import { listarAtividadesConcluidas } from '../../core/AtividadesConfigs';

export const indexConcluidas = async (request: Request, response: Response): Promise<void> => {
    const atividades = await listarAtividadesConcluidas();
    response.render('atividadesConcluidas', { atividades });
};