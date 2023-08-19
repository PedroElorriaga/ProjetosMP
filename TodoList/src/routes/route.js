const express = require('express');
const http = express.Router();

http.get('/', (req, res) => {
    res.send('Hello world!')
});

module.exports = http;
