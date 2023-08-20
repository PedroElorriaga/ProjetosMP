const express = require('express');
const http = express.Router();

http.get('/', (req, res) => {
    res.render('index');
});

module.exports = http;
