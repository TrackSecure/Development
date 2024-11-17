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

module.exports = {
    qtdServidores,
    qtdAlertas
};