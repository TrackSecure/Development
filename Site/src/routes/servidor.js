var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.post("/cadastrar", function (req, res) {
    servidorController.cadastrar(req, res);
})

router.get("/:fkEmpresa", function (req, res) {
    servidorController.listarServidores(req, res);
})

module.exports = router;