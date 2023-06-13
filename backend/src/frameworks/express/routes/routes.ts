import express from 'express';
import * as homeController from '../../../application/controllers/homeController';
import * as atividadeController from '../../../application/controllers/atividadeController';
import * as atividadesConcluidas from '../../../application/controllers/listarAtvConcluida';
import * as atividadesAndamento from '../../../application/controllers/listarAtvAndamento';

const route = express.Router();

route.get('/test', homeController.index);

route.get('/atividade-concluida', atividadesConcluidas.indexConcluidas);

route.get('/atividade-em-andamento', atividadesAndamento.indexAndamento);

route.get('/atividade/register', atividadeController.cadastroAtividade);
route.post('/atividade/register', atividadeController.cadastroAtividadeFeito);

route.get('/atividade-editar/:id', atividadeController.edicaoGet);
route.post('/atividade-editar/:id', atividadeController.edicaoPost);

route.get('/atividade-em-andamento/concluida/:id', atividadeController.concluidaGet);
route.post('/atividade-em-andamento/concluida/:id', atividadeController.concluidaPost);

route.post('/atividade-delete/:id', atividadeController.deletarAtividade);

export default route;