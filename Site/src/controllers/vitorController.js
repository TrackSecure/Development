var vitorModel = require("../models/vitorModel");

function graficoTopProcessos(req, res) {

    var fkServidor = req.params.fkServidor;

    vitorModel.graficoTopProcessos(fkServidor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado para os processos.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar métricas de processos:", erro.sqlMessage);
            res.status(500).json({ erro: "Erro interno ao buscar métricas de processos." });
        });
}

function contarProcessos(req, res) {
    vitorModel.contarProcessos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Envia a quantidade de processos
            } else {
                res.status(204).send("Nenhum processo encontrado.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao contar os processos:", erro.sqlMessage);
            res.status(500).json({ erro: "Erro interno ao contar os processos." });
        });
}

function contarProcessosAcima(req, res) {
    vitorModel.contarProcessosAcima()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Envia a quantidade de processos acima de 20% de memória
            } else {
                res.status(204).send("Nenhum processo encontrado com mais de 20% de uso de memória.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao contar os processos acima de 20% de memória:", erro.sqlMessage);
            res.status(500).json({ erro: "Erro interno ao contar os processos acima de 20% de memória." });
        });
}

function buscarProcessosMaliciosos(req, res) {
    vitorModel.buscarProcessosMaliciosos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado); // Envia a lista de nomes de processos
            } else {
                res.status(204).send("Nenhum processo encontrado.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao buscar processos maliciosos:", erro.sqlMessage);
            res.status(500).json({ erro: "Erro interno ao buscar processos." });
        });
}

module.exports = {
    graficoTopProcessos,
    contarProcessos,
    contarProcessosAcima,
    buscarProcessosMaliciosos
};
