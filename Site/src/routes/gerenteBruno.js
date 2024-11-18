var express = require("express");
var router = express.Router();

var brunoController = require("../controllers/brunoController");

router.get("/buscarQtdAlertas/:fkServidor/:prioridade/:mes", function(req, res) {
    brunoController.buscarQtdAlertas(req, res);
})

module.exports = router;