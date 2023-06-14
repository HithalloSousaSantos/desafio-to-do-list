
import { Request, Response } from 'express';
import { listarAtividadesAndamento } from '../../core/AtividadesConfigs';

export const indexAndamento = async (request: Request, response: Response): Promise<void> => {
    const atividades = await listarAtividadesAndamento();
    response.json(atividades);
}