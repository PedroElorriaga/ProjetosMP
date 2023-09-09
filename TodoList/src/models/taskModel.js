const { mongoose, Schema, mongo} = require('mongoose');

const tasksSchema = new Schema({
    titulo: {type: String, required: true},
    prioridade: {type: String, default: "Baixa"},
    created_at: {type: Date, default: new Date(Date.now()).toLocaleString()}
});

const TaskModel = mongoose.model('Tarefas', tasksSchema);

const criarTarefaModel = async (task) => {
     const conexao = await TaskModel.create({
        "titulo" : task.tarefaLabel,
     });

     return conexao;
};

const pegaTarefasModel = async () => {
    const conexao = await TaskModel.find({});

    return conexao;
};

module.exports = {
    criarTarefaModel,
    pegaTarefasModel,
};
