var enzoModel = require("../models/enzoModel");

function tempoUptime(req, res) {
    var fkServidor = req.params.fkServidor;

    enzoModel.tempoUptime(fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function tempoDowntime(req, res) {
    var fkServidor = req.params.fkServidor;

    enzoModel.tempoDowntime(fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function graficoMediaHoras(req, res) {
    var fkServidor = req.params.fkServidor;

    enzoModel.graficoMediaHoras(fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function graficoUpDown(req, res) {
    var fkServidor = req.params.fkServidor;

    enzoModel.graficoUpDown(fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

module.exports = {
  tempoUptime,
  tempoDowntime,
  graficoMediaHoras,
  graficoUpDown
}