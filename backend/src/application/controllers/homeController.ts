import {Request, Response } from 'express';
import { listarAtividades } from '../../core/AtividadesConfigs';

export const index = async (request: Request, response: Response): Promise<void> => {
    const atividades = await listarAtividades();
    response.render('index', { atividades }) 
}
