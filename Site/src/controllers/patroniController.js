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

function frequenciaCpuGrafico(req, res){

    var linha = req.body.linhaServer
    var servidor = req.body.servidorServer

    patroniModel.frequenciaCpuGrafico(linha, servidor)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            }
        })
}

function frequenciaRamGrafico(req, res){

    var linha = req.body.linhaServer
    var servidor = req.body.servidorServer

    patroniModel.frequenciaRamGrafico(linha, servidor)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            }
        })
}

function frequenciaDiscoGrafico(req, res){

    var linha = req.body.linhaServer
    var servidor = req.body.servidorServer

    patroniModel.frequenciaDiscoGrafico(linha, servidor)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            }
        })
}

module.exports = {
  cadastrarLinha,
  cadastrarServidor,
  frequenciaCpuGrafico,
  frequenciaRamGrafico,
  frequenciaDiscoGrafico
}