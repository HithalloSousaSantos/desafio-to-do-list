const express = require('express');
const route = express.Router();

const homeController = require('../../../controllers/homeController');

const atividadeController = require('../../../controllers/atividadeController');

const listarAtividadeConController = require('../../../controllers/listarAtividadeConController');
const listarAtividadeAndController = require('../../../controllers/listarAtividadeAndController')

//Rotas da home
route.get('/', homeController.index);

//Rotas de listar Atividades Concluidas
route.get('/atividade-concluida', listarAtividadeConController.index)

//Rotas de listar Atividades em andamento
route.get('/atividade-em-andamento',listarAtividadeAndController.index);

// Rotas de Criação de Atividade
route.get('/atividade/register', atividadeController.register);
route.post('/atividade/register', atividadeController.atividade)

// Rota para editar Atividade
route.get('/atividade-editar/:id', atividadeController.editG);
route.post('/atividade-editar/:id', atividadeController.editP);

// Rota para concluir Atividade
route.get('/atividade-em-andamento/concluida/:id', atividadeController.concluidaG);
route.post('/atividade-em-andamento/concluida/:id', atividadeController.concluidaP);

//Rota para deletar Atividade
route.post('/atividade-delete/:id', atividadeController.delete);

module.exports = route;