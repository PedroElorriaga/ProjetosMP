const { mongoose, Schema, mongo} = require('mongoose');

const tasksSchema = new Schema({
    titulo: {type: String, required: true},
    prioridade: {type: String, default: "Baixa"},
    created_at: {type: Date, default: Date.now()}
});

const TaskModel = mongoose.model('Tarefas', tasksSchema);
