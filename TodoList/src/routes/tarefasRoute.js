const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.tarefas);
router.get('/get-tasks', taskController.showTasks);
router.post('/registrar', taskController.createTask);
router.delete('/deletar/:id', taskController.deleteTask);

module.exports = router