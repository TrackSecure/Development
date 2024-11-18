var brunoModel = require("../models/brunoModel");

function buscarQtdAlertas(req, res) {
    var fkServidor = req.params.fkServidor;
    var prioridade = req.params.prioridade;
    var mes = req.params.mes;

    console.log(`Recuperando a quantidade de alertas`);

    brunoModel.buscarQtdAlertas(fkServidor, prioridade, mes).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarQtdAlertas
}