var enzoModel = require("../models/enzoModel");

function tempoUptime(req, res) {
    enzoModel.tempoUptime()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function tempoDowntime(req, res) {
    enzoModel.tempoDowntime()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function graficoMediaHoras(req, res) {
    enzoModel.graficoMediaHoras()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function graficoMensalDowntime(req, res) {
    enzoModel.graficoMensalDowntime()
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
  graficoMensalDowntime
}