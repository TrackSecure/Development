var express = require("express");
var router = express.Router();

var estacaoController = require("../controllers/estacaoController");

router.post("/cadastrar", function (req, res) {
    estacaoController.cadastrar(req, res);
})

router.get("/listar/:fkEmpresa", function (req, res) {
    estacaoController.listarEstacoes(req, res);
})

router.post("/atualizar", function (req, res) {
    estacaoController.atualizar(req, res);
})

module.exports = router;