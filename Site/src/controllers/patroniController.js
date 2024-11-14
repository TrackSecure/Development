var patroniModel = require("../models/patroniModel");

function cadastrarLinha(req, res) {
    patroniModel.cadastrarLinha()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

function cadastrarServidor(req, res){
    patroniModel.cadastrarServidor()
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            }
        })
}

module.exports = {
  cadastrarLinha,
  cadastrarServidor
}