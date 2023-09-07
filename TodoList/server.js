const app = require('./src/app/app');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.CONNECTION_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Base de dados conectada com sucesso!');
        app.emit('connect');
    }).catch(e => console.log('ERROR: ' + e));

const PORT = process.env.PORT || 3006

app.on('connect', () => {
    app.listen(PORT, () => {
        console.log(`Server está on-line`);
        console.log(`Acessar em http://localhost:${PORT}`);
    })
});

