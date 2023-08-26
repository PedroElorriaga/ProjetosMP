const express = require('express');
const route = express.Router();
const taskController = require('../controllers/taskController');
const loginController = require('../controllers/loginController');

// TASK ENDPOINT
route.get('/tarefas', taskController.tasksUser);

route.get('/login', loginController.loginUser);
route.get('/cadastro', loginController.cadastroUser);

module.exports = route;
