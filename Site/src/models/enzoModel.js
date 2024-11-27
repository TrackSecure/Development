var database = require("../database/config")

function tempoUptime(fkServidor) {
    console.log("");

    var instrucaoSql = `
        SELECT 10 *
        (ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 1 AND fkServidor = ${fkServidor}) / 60, 2)) 
        as Horas_Uptime;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempoDowntime(fkServidor) {
    console.log("");

    var instrucaoSql = `
        SELECT 10 *
    (ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 0 AND fkServidor = ${fkServidor}) / 60, 2)) 
    as Horas_Downtime;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoMediaHoras(fkServidor) {
    console.log("");

    var instrucaoSql = `
        SELECT MONTH(dataHora), 10 * ROUND((COUNT(*)/60), 2) AS qtdHoras FROM ServidorStatus 
WHERE uptime = 0 AND fkServidor = ${fkServidor}
GROUP BY MONTH(dataHora) ORDER BY MONTH(dataHora);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoUpDown(fkServidor) {
    console.log("");

    var instrucaoSql = `
        SELECT 
    ROUND((Horas_Uptime * 100.0) / (Horas_Uptime + Horas_Downtime), 2) AS Porcentagem_Uptime,
    ROUND((Horas_Downtime * 100.0) / (Horas_Uptime + Horas_Downtime), 2) AS Porcentagem_Downtime
FROM (
    SELECT 
        10 * ROUND(
            (SELECT COUNT(*) 
             FROM ServidorStatus 
             WHERE uptime = 1 
               AND fkServidor = ${fkServidor}) / 60.0, 2
        ) AS Horas_Uptime,
        10 * ROUND(
            (SELECT COUNT(*) 
             FROM ServidorStatus 
             WHERE uptime = 0 
               AND fkServidor = ${fkServidor}) / 60.0, 2
        ) AS Horas_Downtime
) AS HorasTotais;
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