var brunaModel = require("../models/brunaModel");

function qtdServidorSobrecarregado(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.qtdServidorSobrecarregado(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a quantidade de servidores sobrecarregados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function infoServidorSobrecarregado(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.infoServidorSobrecarregado(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar as informações dos servidores sobrecarregados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function qtdAlertaCPU(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.qtdAlertaCPU(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a quantidade de alertas na CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function infoAlertaCPU(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.infoAlertaCPU(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar as informações dos alertas na CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function qtdAlertaRAM(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.qtdAlertaRAM(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a quantidade de alertas na RAM! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function infoAlertaRAM(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.infoAlertaRAM(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar as informações dos alertas na RAM! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function rankCPU(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.rankCPU(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar o ranking da CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function infoRankCPU(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.infoRankCPU(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar as informações do ranking da CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function rankRAM(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.rankRAM(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar o ranking da RAM! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function infoRankRAM(req, res) {

    var fkEmpresa = req.params.fkEmpresa;

    brunaModel.infoRankRAM(fkEmpresa)
    .then(
        function (resultado) {
            console.log('FK EMPRESA: ', fkEmpresa)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar as informações do ranking da RAM! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

function grafico(req, res) {

    var linha = req.params.linha;
    var mes = req.params.mes

    brunaModel.grafico(linha,mes)
    .then(
        function (resultado) {
            console.log('LINHA: ', linha)
            console.log('MES:', mes)
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar as informações dos gráficos! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
    qtdServidorSobrecarregado,
    infoServidorSobrecarregado,
    qtdAlertaCPU,
    infoAlertaCPU,
    qtdAlertaRAM,
    infoAlertaRAM,
    rankCPU,
    infoRankCPU,
    rankRAM,
    infoRankRAM,
    grafico
}