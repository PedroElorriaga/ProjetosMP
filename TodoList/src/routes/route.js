const express = require('express');
const route = express.Router();
const taskController = require('../controllers/taskController');
const loginController = require('../controllers/loginController');
const homeController = require('../controllers/homeController');

// TASK ENDPOINT
route.get('/tarefas', taskController.tasksUser);
route.get('/login', loginController.loginUser);
route.get('/cadastro', loginController.cadastroUser);
route.get('/', homeController.homeUser);

module.exports = route;
