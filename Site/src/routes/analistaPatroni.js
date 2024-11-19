var express = require("express");
var router = express.Router();

var patroniController = require("../controllers/patroniController");

router.get("/cadastrarLinha", function (req, res) {
    patroniController.cadastrarLinha(req, res); // Faz o Select das linhas
})

router.get("/cadastrarServidor", function(req, res){
    patroniController.cadastrarServidor(req, res); // Faz a rota dos servidores
})

router.get("/frequenciaCpuGrafico", function(req, res){
    patroniController.frequenciaCpuGrafico(req, res); // Faz a rota do Grafico de Linha
})

router.get("/frequenciaRamGrafico", function(req, res){
    patroniController.frequenciaRamGrafico(req, res); // Faz a rota do Grafico de Ram
})

router.get("/frequenciaDiscoGrafico", function(req, res){
    patroniController.frequenciaDiscoGrafico(req, res); // Faz a rota do Grafico do Disco
})

router.get("/comparacaoCpuRam", function(req, res){
    patroniController.comparacaoCpuRam(req, res); // Faz a rota do Grafico de Comparação
})

router.get("/pacotesRecebidos", function(req, res){
    patroniController.pacotesRecebidos(req, res); // Faz a rota do Grafico de Comparação
})


module.exports = router;