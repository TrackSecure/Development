var express = require("express");
var router = express.Router();

var gustavoController = require("../controllers/gustavoController");

router.post("/qtdServidores", function (req, res) {
    gustavoController.qtdServidores(req, res);
});

router.post("/qtdAlertas", function (req, res) {
    gustavoController.qtdAlertas(req, res);
});

router.post("/listarServidores", function (req, res) {
    gustavoController.listarServidores(req, res);
});

router.get("/listarLinhas", function (req, res) {
    gustavoController.listarLinhas(req, res);
});

router.get("/dadosMonitoramento/:MacAddress", function (req, res) {
    gustavoController.dadosMonitoramento(req, res);
});

module.exports = router;