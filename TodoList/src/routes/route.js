const express = require('express');
const route = express.Router();
const taskController = require('../controllers/taskController');
const loginController = require('../controllers/loginController');
const homeController = require('../controllers/homeController');
const taskMiddleware = require('../middlewares/taskModdleware');


// TASK ENDPOINT
route.get('/tarefas', taskController.tarefas);
route.get('/tarefas/get-tasks', taskController.showTasks);
route.post('/tarefas/registrar', taskMiddleware.verificaEnvio, taskController.createTask);

route.get('/login', loginController.loginUser);
route.get('/cadastro', loginController.cadastroUser);
route.get('/', homeController.homeUser);

module.exports = route;
