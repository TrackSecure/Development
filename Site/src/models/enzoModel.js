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

function graficoUpDown() {
    console.log("");

    var instrucaoSql = `
        SELECT 
    s.nome AS servidor_nome,
    ROUND(
        (SUM(CASE WHEN ss.uptime = 1 THEN TIMESTAMPDIFF(SECOND, ss.dataHora, NOW()) ELSE 0 END) / 
         NULLIF(SUM(TIMESTAMPDIFF(SECOND, ss.dataHora, NOW())), 0)) * 100, 2
    ) AS porcentagem_uptime,
    ROUND(
        (SUM(CASE WHEN ss.uptime = 0 THEN TIMESTAMPDIFF(SECOND, ss.dataHora, NOW()) ELSE 0 END) / 
         NULLIF(SUM(TIMESTAMPDIFF(SECOND, ss.dataHora, NOW())), 0)) * 100, 2
    ) AS porcentagem_downtime
FROM 
    Servidor s
JOIN 
    ServidorStatus ss ON s.MacAddress = ss.fkServidor
GROUP BY 
    s.MacAddress;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    tempoUptime,
    tempoDowntime,
    graficoMediaHoras,
    graficoUpDown
};