var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.post("/cadastrar", function (req, res) {
    servidorController.cadastrar(req, res);
})

router.get("/listar/:fkEmpresa", function (req, res) {
    servidorController.listarServidores(req, res);
})

router.post("/atualizar", function (req, res) {
    servidorController.atualizar(req, res);
})

module.exports = router;