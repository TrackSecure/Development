var estacaoModel = require("../models/estacaoModel");

function cadastrar(req, res) {
    var nome  = req.body.nomeServer;
    var linha = req.body.linhaServer;
    var servidor = req.body.servidorServer;

    if (nome == undefined) {
        res.status(400).send("O nome está undefined!");
    } else if (linha == undefined) {
        res.status(400).send("A linha está undefined!");
    } else if (servidor == undefined) {
        res.status(400).send("O servidor está undefined!");
    } 
    else {
        estacaoModel.cadastrar(nome, linha, servidor)
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
    var linha = req.body.linhaServer;
    var servidor = req.body.servidorServer;

    if (idEstacao == undefined) {
        res.status(400).send("O nome está undefined!");
    } else if (linha == undefined) {
        res.status(400).send("A linha está undefined!");
    } else if (servidor == undefined) {
        res.status(400).send("O servidor está undefined!");
    }
    else {
        estacaoModel.atualizar(idEstacao, linha, servidor)
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