var express = require("express");
var router = express.Router();

var brunaController = require("../controllers/brunaController");

router.get("/qtdServidorSobrecarregado/:fkEmpresa", function (req, res) {
    brunaController.qtdServidorSobrecarregado(req, res);
});

router.get("/infoServidorSobrecarregado/:fkEmpresa", function (req, res) {
    brunaController.infoServidorSobrecarregado(req, res);
});

router.get("/qtdAlertaCPU/:fkEmpresa", function (req, res) {
    brunaController.qtdAlertaCPU(req, res);
});

router.get("/infoAlertaCPU/:fkEmpresa", function (req, res) {
    brunaController.infoAlertaCPU(req, res);
});

router.get("/qtdAlertaRAM/:fkEmpresa", function (req, res) {
    brunaController.qtdAlertaRAM(req, res);
});

router.get("/infoAlertaRAM/:fkEmpresa", function (req, res) {
    brunaController.infoAlertaRAM(req, res);
});

router.get("/rankCPU/:fkEmpresa", function (req, res) {
    brunaController.rankCPU(req, res);
});

router.get("/infoRankCPU/:fkEmpresa", function (req, res) {
    brunaController.infoRankCPU(req, res);
});

router.get("/rankRAM/:fkEmpresa", function (req, res) {
    brunaController.rankRAM(req, res);
});

router.get("/infoRankRAM/:fkEmpresa", function (req, res) {
    brunaController.infoRankRAM(req, res);
});

router.get("/grafico/:linha/:mes", function (req, res) {
    brunaController.grafico(req, res);
});

router.get("/wordCloud/:linha/:mes", function (req, res) {
    brunaController.wordCloud(req, res);
});

module.exports = router;