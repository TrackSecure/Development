var database = require("../database/config")

function qtdServidores(fkEmpresa) {

    var instrucaoSql = `SELECT COUNT(*) AS total_servidores FROM Servidor WHERE fkEmpresa = ${fkEmpresa};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdAlertas(fkEmpresa) {

    var instrucaoSql = `
        SELECT COUNT(*) AS total_alertas
        FROM Alerta
        INNER JOIN Servidor ON Alerta.fkServidor = Servidor.MacAddress
        WHERE Servidor.fkEmpresa = ${fkEmpresa};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarServidores() {
    var instrucaoSql = `
        SELECT MacAddress, nome, 
               CASE WHEN EXISTS (SELECT 1 FROM Alerta WHERE fkServidor = Servidor.MacAddress) THEN 1 ELSE 0 END AS temAlerta
        FROM Servidor
        ORDER BY temAlerta DESC; -- Coloca os servidores com alertas primeiro
    `;
    return database.executar(instrucaoSql);
}

function dadosMonitoramento(MacAddress) {
    var instrucaoSql = `
        SELECT 
            porcentagemProcessador, porcentagemMemoria, dtHora
        FROM 
            Registro
        WHERE 
            fkServidor = ${MacAddress}
        ORDER BY 
            dtHora LIMIT 10; -- Retorna os últimos 10 registros
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    qtdServidores,
    qtdAlertas,
    listarServidores,
    dadosMonitoramento
};