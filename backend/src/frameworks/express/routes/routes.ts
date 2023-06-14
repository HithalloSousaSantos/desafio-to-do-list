import express from 'express';
import * as homeController from '../../../application/controllers/homeController';
import * as atividadeController from '../../../application/controllers/atividadeController';
import * as atividadesConcluidas from '../../../application/controllers/listarAtvConcluida';
import * as atividadesAndamento from '../../../application/controllers/listarAtvAndamento';

const route = express.Router();

route.get('/', homeController.index);//Front feito

route.get('/atividade/concluida', atividadesConcluidas.indexConcluidas);//front feito

route.get('/atividade/andamento', atividadesAndamento.indexAndamento);//Front feito

// route.get('/atividade/cadastro', atividadeController.cadastroAtividade);
route.post('/atividade/cadastro', atividadeController.cadastroAtividadeFeito); //Front feito

route.get('/atividade/editar/:id', atividadeController.edicaoGet); //front feito
route.put('/atividade/editar/:id', atividadeController.edicaoPost);//front feito

// route.get('/atividade/andamento/concluido/:id', atividadeController.concluidaGet);
route.post('/atividade/andamento/concluida/:id', atividadeController.concluidaPost); //front feito

route.delete('/atividade/delete/:id', atividadeController.deletarAtividade);

export default route;