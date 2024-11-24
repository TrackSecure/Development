var express = require("express");
var router = express.Router();

var patroniController = require("../controllers/patroniController");

router.get("/cadastrarLinha", function (req, res) {
    patroniController.cadastrarLinha(req, res); // Faz o Select das linhas
})

router.get("/cadastrarServidor/:linha", function(req, res){
    patroniController.cadastrarServidor(req, res); // Faz a rota dos servidores
})

router.get("/frequenciaCpuGrafico/:linha/:fkServidor", function(req, res){
    patroniController.frequenciaCpuGrafico(req, res); // Faz a rota do Grafico de Linha
})

router.get("/frequenciaRamGrafico/:linha/:fkServidor", function(req, res){
    patroniController.frequenciaRamGrafico(req, res); // Faz a rota do Grafico de Ram
})

router.get("/frequenciaDiscoGrafico/:linha/:fkServidor", function(req, res){
    patroniController.frequenciaDiscoGrafico(req, res); // Faz a rota do Grafico do Disco
})

router.get("/comparacaoCpuRam/:linha/:fkServidor", function(req, res){
    patroniController.comparacaoCpuRam(req, res); // Faz a rota do Grafico de Comparação
})

router.get("/pacotesRecebidos", function(req, res){
    patroniController.pacotesRecebidos(req, res); // Faz a rota dos pacotes
})

router.get("/comparacaoDisco", function(req, res){
    patroniController.comparacaoDisco(req, res); // Faz a rota do Grafico de Comparação de Disco
})


module.exports = router;