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


function comparacaoCpuRam(req, res){

    var linha = req.body.linhaServer
    var servidor = req.body.servidorServer

    patroniModel.comparacaoCpuRam(linha, servidor)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            }
        })
}

function pacotesRecebidos(req, res){

    var linha = req.body.linhaServer
    var servidor = req.body.servidorServer

    patroniModel.pacotesRecebidos(linha, servidor)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            }
        })
}

function comparacaoDisco(req, res){

    var linha = req.body.linhaServer
    var servidor = req.body.servidorServer

    patroniModel.comparacaoDisco(linha, servidor)
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
  frequenciaDiscoGrafico,
  comparacaoCpuRam,
  pacotesRecebidos,
  comparacaoDisco
}