var express = require("express");
var router = express.Router();

var vitorController = require("../controllers/vitorController");

// Rota para pegar os top 5 processos com mais consumo de ram 
router.get("/graficoTopProcessos", function (req, res) {
    vitorController.graficoTopProcessos(req, res);
});

// Rota para contar o total de processos
router.get("/contarProcessos", function (req, res) {
    vitorController.contarProcessos(req, res);
});

// Rota para contar os processos acima do esperado
router.get("/contarProcessosAcima", function (req, res) {
    vitorController.contarProcessosAcima(req, res);
});

// Rota para buscar os processos maliciosos
router.get("/buscarProcessosMaliciosos", function (req, res) {
    vitorController.buscarProcessosMaliciosos(req, res);
});

module.exports = router;
