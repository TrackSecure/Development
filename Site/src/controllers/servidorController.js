var servidorModel = require("../models/servidorModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var so = req.body.soServer;
    var disco = req.body.discoServer;
    var memoria = req.body.memoriaServer;
    var cpu = req.body.cpuServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    if (nome == undefined) {
        res.status(400).send("O nome do servidor está undefined!");
    } else if (so == undefined) {
        res.status(400).send("O Sistema Operacional está undefined!");
    } else if (disco == undefined) {
        res.status(400).send("O Disco está undefined!");
    } else if (memoria == undefined) {
        res.status(400).send("A memória está undefined!");
    } else if (cpu == undefined) {
        res.status(400).send("A frequência da cpu está undefined!")
    } else if (fkEmpresa == undefined) {
        res.status(400).send("A fkEmpresa está undefined!")
    }
    else {
        servidorModel.cadastrar(nome, so, disco, memoria, cpu, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}