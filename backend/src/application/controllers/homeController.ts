import {Request, Response } from 'express';
import { listarAtividades } from '../../core/AtividadesConfigs.js';
// import atividade from '../../core/AtividadesConfigs.js';

export const index = async (request: Request, response: Response): Promise<void> => {
    const atividades = await listarAtividades();
    response.render('index', { atividades }) 
}


//