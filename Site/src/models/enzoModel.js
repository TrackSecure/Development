var database = require("../database/config")

function tempoUptime() {
    console.log("");

    var instrucaoSql = `
       SELECT 10 *
(ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 1 AND fkServidor = '00:00:00:00:00:00') / 60, 2)) 
as Horas_Uptime;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function tempoDowntime() {
    console.log("");

    var instrucaoSql = `
        SELECT 10 *
(ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 0 AND fkServidor = '00:00:00:00:00:00' AND dataHora Like '%-11-%') / 60, 2)) 
as Horas_Downtime;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoMediaHoras() {
    console.log("");

    var instrucaoSql = `
        SELECT MONTH(dataHora), 10 * ROUND((COUNT(*)/60), 2) AS qtdHoras FROM ServidorStatus 
WHERE uptime = 0 AND fkServidor = '00:00:00:00:00:00' 
GROUP BY MONTH(dataHora) ORDER BY MONTH(dataHora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoMensalDowntime() {
    console.log("");

    var instrucaoSql = `
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    tempoUptime,
    tempoDowntime,
    graficoMediaHoras,
    graficoMensalDowntime
};