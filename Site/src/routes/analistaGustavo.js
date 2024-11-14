var express = require("express");
var router = express.Router();

var gustavoController = require("../controllers/gustavoController");

router.post("/qtdServidores", function (req, res) {
    // Chama a função correta do controller
    gustavoController.qtdServidores(req, res);
});

module.exports = router;