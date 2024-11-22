var express = require("express");
var router = express.Router();

var enzoController = require("../controllers/enzoController");

router.get("/tempoUptime", function (req, res) {
    enzoController.tempoUptime(req, res); // Uptime 12 meses
})

router.get("/tempoDowntime", function (req, res) {
    enzoController.tempoDowntime(req, res); // Downtime 12 meses
})

module.exports = router;