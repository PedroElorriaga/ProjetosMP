const taskModel = require('../models/taskModel');

exports.showTasks = async (req, res) => {
    res.render('index');
};

exports.createTask = (req, res) => {
    res.json({ "Status": "Ok" });
};