exports.verificaEnvio = (req, res, next) => {
    const entradaDeDados = req.body;
    if (entradaDeDados.tarefaLabel === '' || entradaDeDados.tarefaLabel === undefined){
        return res.json({ "Status" : "BAD"});
    };

    next();
};