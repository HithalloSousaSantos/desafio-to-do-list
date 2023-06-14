import { Request, Response } from 'express';
import { listarAtividadesConcluidas } from '../../core/AtividadesConfigs';


/**
 * 
 * @param request 
 * @param response 
 * @returns Promise<void>
 */

export const indexConcluidas = async (request: Request, response: Response): Promise<void> => {
    try {
        const atividades = await listarAtividadesConcluidas();
        response.json(atividades)
    } catch (erro) {
        console.error('Erro ao listar as atividades concluidas: ', erro);
        response.status(500).send('Erro ao listar atividades concluídas');
    };
};