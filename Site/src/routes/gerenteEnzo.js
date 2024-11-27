var express = require("express");
var router = express.Router();

var enzoController = require("../controllers/enzoController");

router.get("/tempoUptime/:fkServidor", function (req, res) {
    enzoController.tempoUptime(req, res); // Uptime 12 meses
})

router.get("/tempoDowntime/:fkServidor", function (req, res) {
    enzoController.tempoDowntime(req, res); // Downtime 12 meses
})

router.get("/graficoMediaHoras/:fkServidor", function (req, res) {
    enzoController.graficoMediaHoras(req, res); // Grafico media hora
})

router.get("/graficoUpDown/:fkServidor", function (req, res) {
    enzoController.graficoUpDown(req, res); // Grafico Uptime x Downtime
})


module.exports = router;