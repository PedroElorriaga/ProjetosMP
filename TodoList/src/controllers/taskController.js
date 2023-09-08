const taskModel = require('../models/taskModel');

exports.tarefas = (req, res) => {
    res.render('index')
}

exports.showTasks = async (req, res) => {
    const retorno = await taskModel.pegaTarefasModel();
    return res.json(retorno);
};

exports.createTask = async (req, res) => {
    const retorno = await taskModel.criarTarefaModel(req.body);
    return res.redirect('/tarefas');
};