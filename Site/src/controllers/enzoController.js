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

module.exports = {
  tempoUptime,
  tempoDowntime
}