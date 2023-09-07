const { MongoClient } = require('mongodb');
require('dotenv').config();

console.log(process.env.DATABASE_PASSWORD)

const url = `mongodb+srv://MatheusPedro:${process.env.DATABASE_PASSWORD}@todolistmp.167kbrb.mongodb.net/?retryWrites=true&w=majority`;
const cliente = new MongoClient(url);

const conectar = async () => {
    await cliente.connect();
    const teste = 'Servidor conectado com sucesso!';

    return teste;
};


module.exports = {
    conectar
};
