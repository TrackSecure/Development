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
    var fkServidor = req.params.fkServidor;

    vitorModel.contarProcessos(fkServidor)
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
    var fkServidor = req.params.fkServidor;

    vitorModel.contarProcessosAcima(fkServidor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]); // Envia a quantidade de processos acima do esperado
            } else {
                res.status(204).send("Nenhum processo encontrado com mais de 20% de uso de memória.");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao contar os processos acima do esperado:", erro.sqlMessage);
            res.status(500).json({ erro: "Erro interno ao contar os processos acima do esperado." });
        });
}

function buscarProcessosMaliciosos(req, res) {
    var fkServidor = req.params.fkServidor;

    vitorModel.buscarProcessosMaliciosos(fkServidor)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado); // Envia os processos encontrados
            } else {
                res.status(404).send("Nenhum processo encontrado para o servidor especificado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar processos:", erro);
            res.status(500).send("Erro ao buscar processos.");
        });
}

module.exports = {
    graficoTopProcessos,
    contarProcessos,
    contarProcessosAcima,
    buscarProcessosMaliciosos
};
