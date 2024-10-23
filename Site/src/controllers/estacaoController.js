var estacaoModel = require("../models/estacaoModel");

function cadastrar(req, res) {
    var nome  = req.body.nomeServer;
    var bairro = req.body.bairroServer;
    var estado = req.body.estadoServer;
    var servidor = req.body.servidorServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    if (nome == undefined) {
        res.status(400).send("O nome está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("O bairro está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("O estado está undefined!");
    } else if (servidor == undefined) {
        res.status(400).send("O servidor está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("A fkEmpresa está undefined!");
    }
    else {
        estacaoModel.cadastrar(nome, bairro, estado, servidor, fkEmpresa)
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

function listarEstacoes(req, res) {
    var fkEmpresa = req.params.fkEmpresa;
  
    estacaoModel.listarEstacoes(fkEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as estações.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizar(req, res) {
    var idEstacao  = req.body.idServer;
    var bairro = req.body.bairroServer;
    var estado = req.body.estadoServer;
    var servidor = req.body.servidorServer;

    if (idEstacao == undefined) {
        res.status(400).send("O nome está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("O bairro está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("O estado está undefined!");
    } else if (servidor == undefined) {
        res.status(400).send("O servidor está undefined!");
    }
    else {
        estacaoModel.atualizar(idEstacao, bairro, estado, servidor)
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
    cadastrar,
    listarEstacoes,
    atualizar
}