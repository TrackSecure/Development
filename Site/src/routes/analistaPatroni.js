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
    patroniController.frequenciaCpuGrafico(req, res); // Faz a rota dos servidores
})

router.get("/frequenciaRamGrafico", function(req, res){
    patroniController.frequenciaRamGrafico(req, res); // Faz a rota dos servidores
})

router.get("/frequenciaDiscoGrafico", function(req, res){
    patroniController.frequenciaDiscoGrafico(req, res); // Faz a rota dos servidores
})


module.exports = router;