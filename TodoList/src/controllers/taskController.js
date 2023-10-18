const taskModel = require('../models/taskModel');

exports.tarefas = (req, res) => {
    res.render('tarefas');
};

exports.showTasks = async (req, res) => {
    try {
        const retorno = await taskModel.pegaTarefasModel();
        return res.json(retorno);
    } catch (e) {
        return res.status(401).json({ erro: e.errors });
    }
};

exports.createTask = async (req, res) => {
    try {
        const retorno = await taskModel.criarTarefaModel(req.body);
        return res.redirect('/tarefas');
    } catch (e) {
        return res.json({ erro: e.errors });
    }

};

exports.deleteTask = async (req, res) => {
    try {
        const retorno = await taskModel.deleteTarefas(req.params.id);

        return res.redirect('/tarefas');
    } catch (e) {
        return res.json({ erro: e.errors });
    }
};

exports.updateTask = async (req, res) => {
    try {
        console.log(req.params.id, req.body)
        const retorno = await taskModel.atualizarTask(req.params.id, req.body);

        return res.json(retorno);
    } catch (e) {
        return res.json({ erro: e.errors });
    }
};