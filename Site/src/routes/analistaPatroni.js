var express = require("express");
var router = express.Router();

var patroniController = require("../controllers/patroniController");

router.get("/cadastrarLinha", function (req, res) {
    patroniController.cadastrarLinha(req, res); // Faz o Select das linhas
})

router.get("/cadastrarServidor", function(req, res){
    patroniController.cadastrarServidor(req, res); // Faz a rota dos servidores
})

module.exports = router;