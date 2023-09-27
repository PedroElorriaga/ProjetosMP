const taskModel = require('../models/taskModel');

exports.tarefas = (req, res) => {
    res.render('tarefas')
}

exports.showTasks = async (req, res) => {
    const retorno = await taskModel.pegaTarefasModel();
    return res.json(retorno);
};

exports.createTask = async (req, res) => {
    const retorno = await taskModel.criarTarefaModel(req.body);
    return res.redirect('/tarefas');
};

exports.deleteTask = async (req, res) => {
    if (!req.params.id) {
        return res.status(401).json({ erro: ['Missing ID'] });
    }

    const retorno = await taskModel.deleteTarefas(req.params.id);
    console.log(retorno)

    if (!retorno) {
        return res.status(401).json({ erro: ['Usuário não existe'] });
    }

    const { titulo, prioridade } = retorno;

    return res.status(200).json({ titulo, prioridade, status: ['Deletado com sucesso!'] });
}