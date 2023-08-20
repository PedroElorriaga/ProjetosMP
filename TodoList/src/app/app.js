const express = require('express');
const app = express();
const routes = require('../routes/route');
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../', 'public')));
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'html');

app.use(routes);

module.exports = app;
