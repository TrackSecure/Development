const { tempoUptime } = require("../controllers/enzoController");
var database = require("../database/config")

function tempoUptime() {
    console.log("");

    var instrucaoSql = `
        SELECT e.nome as nome FROM Estacao e;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    tempoUptime
};