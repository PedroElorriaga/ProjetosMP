require('dotenv').config();
const express = require('express');
const app = express();
const tarefasRoute = require('../routes/tarefasRoute');
const route = require('../routes/route');
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../', 'public')));
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'html');

app.use('/tarefas', tarefasRoute);
app.use(route);

module.exports = app;
