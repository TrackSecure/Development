var patroniModel = require("../models/patroniModel");

function cadastrarLinha(req, res) {
    patroniModel.cadastrarLinha()
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            }
        })
}

function cadastrarServidor(req, res) {
    var linha = req.params.linha;
    patroniModel.cadastrarServidor(linha)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('LINHA:', linha)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a linha! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function frequenciaCpuGrafico(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.frequenciaCpuGrafico(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}


function frequenciaRamGrafico(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.frequenciaRamGrafico(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}


function frequenciaDiscoGrafico(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.frequenciaDiscoGrafico(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}



function comparacaoCpuRam(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.comparacaoCpuRam(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function ramMaxMin(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.ramMaxMin(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function cpuMaxMin(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.cpuMaxMin(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function pacotesRecebidos(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.pacotesRecebidos(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function alertaDisco(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.alertaDisco(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function comparacaoDisco(req, res) {
    var linha = req.params.linha;
    var fkServidor = req.params.fkServidor

    patroniModel.comparacaoDisco(linha, fkServidor)
        .then(resultado => {
            if (resultado.length > 0) {
                console.log('Linha e FKServidor:', linha, fkServidor)
                res.json(resultado)
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao capturar a CPU! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
}




module.exports = {
    cadastrarLinha,
    cadastrarServidor,
    frequenciaCpuGrafico,
    frequenciaRamGrafico,
    frequenciaDiscoGrafico,
    comparacaoCpuRam,
    ramMaxMin,
    cpuMaxMin,
    pacotesRecebidos,
    alertaDisco,
    comparacaoDisco
}