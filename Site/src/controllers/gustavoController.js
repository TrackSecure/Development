var gustavoModel = require("../models/gustavoModel");

function qtdServidores(req, res) {
    // Obtém o ID da empresa (fkEmpresa) do corpo da requisição
    var fkEmpresa = req.body.idEmpresa;

    // Chama a função qtdServidores do model para contar os servidores
    gustavoModel.qtdServidores(fkEmpresa)
        .then(function (resultado) {
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            if (resultado.length > 0) {
                // Retorna o total de servidores
                res.json({
                    total_servidores: resultado[0].total_servidores
                });
            } else {
                res.status(404).send("Nenhum servidor encontrado para essa empresa.");
            }
        })
        .catch(function (erro) {
            console.log("Erro ao obter o total de servidores:", erro.sqlMessage);
            res.status(500).json({ error: "Erro ao obter o total de servidores" });
        });
}

function qtdAlertas(req, res) {
    
    var fkEmpresa = req.body.idEmpresa;

    
    gustavoModel.qtdAlertas(fkEmpresa)
        .then(function (resultado) {
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            if (resultado.length > 0) {
                
                res.json({
                    total_alertas: resultado[0].total_alertas
                });
            } else {
                res.status(404).send("Nenhum alerta encontrado para essa empresa.");
            }
        })
        .catch(function (erro) {
            console.log("Erro ao obter o total de alertas:", erro.sqlMessage);
            res.status(500).json({ error: "Erro ao obter o total de alertas" });
        });
}

function listarServidores(req, res) {
    var fkEmpresa = req.body.idEmpresa;
    var linhaSelecionada = req.body.linha;
    console.log(`linha controller: ${linhaSelecionada}`)

    gustavoModel.listarServidores(fkEmpresa, linhaSelecionada)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum servidor encontrado!");
            }
        })
        .catch((erro) => {
            console.error("Erro ao listar servidores:", erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor" });
        });
}

function listarLinhas(req, res) {
    gustavoModel.listarLinhas()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma linha encontrada!");
            }
        })
        .catch((erro) => {
            console.error("Erro ao listar linhas:", erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno no servidor" });
        });
}

function dadosMonitoramento(req, res) {
    var MacAddress = req.params.MacAddress; // Obtém o ID do servidor a partir dos parâmetros da rota.

    gustavoModel.dadosMonitoramento(MacAddress).then((resultado) => {
        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.status(404).send("Nenhum dado encontrado para o servidor.");
        }
    }).catch((erro) => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    qtdServidores,
    qtdAlertas,
    listarServidores,
    listarLinhas,
    dadosMonitoramento
};