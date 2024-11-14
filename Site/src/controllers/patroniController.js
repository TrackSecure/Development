var patroniModel = require("../models/patroniModel");

function cadastrarLinha(req, res) {
    patroniModel.cadastrarLinha()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } 
        })
}

module.exports = {
  cadastrarLinha
}