var database = require("../database/config")

function qtdServidores(fkEmpresa) {

    var instrucaoSql = `SELECT COUNT(*) AS total_servidores FROM Servidor WHERE fkEmpresa = ${fkEmpresa};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    qtdServidores
};