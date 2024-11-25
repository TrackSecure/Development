var express = require("express");
var router = express.Router();

var vitorController = require("../controllers/vitorController");

// Rota para pegar os top 5 processos com mais consumo de RAM
router.get("/graficoTopProcessos/:fkServidor", function (req, res) {
    vitorController.graficoTopProcessos(req, res);
});

// Rota para contar o total de processos
router.get("/contarProcessos/:fkServidor", function (req, res) {
    vitorController.contarProcessos(req, res);
});

// Rota para contar os processos acima do esperado
router.get("/contarProcessosAcima/:fkServidor", function (req, res) {
    vitorController.contarProcessosAcima(req, res);
});

// Rota para buscar os processos maliciosos
router.get("/buscarProcessosMaliciosos/:fkServidor", function (req, res) {
    vitorController.buscarProcessosMaliciosos(req, res);
});

module.exports = router;
