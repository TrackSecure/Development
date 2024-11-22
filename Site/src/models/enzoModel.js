const { tempoDowntime } = require("../controllers/enzoController");
var database = require("../database/config")

function tempoUptime() {
    console.log("");

    var instrucaoSql = `
        SELECT 10 *
(ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 0 AND fkServidor = '00:00:00:00:00:00' AND dataHora Like '%-11-%') / 60, 2)) 
as Horas_Downtime;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function tempoDowntime() {
    console.log("");

    var instrucaoSql = `
        SELECT 
    TIME_FORMAT(SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND, dataHora, proxDataHora))), '%H:%i') AS TempoDowntime
FROM (
    SELECT 
        fkServidor,
        dataHora,
        IFNULL(
            (SELECT dataHora 
             FROM ServidorStatus AS s2 
             WHERE s2.fkServidor = s1.fkServidor 
               AND s2.dataHora > s1.dataHora 
             ORDER BY s2.dataHora ASC 
             LIMIT 1),
            NOW()
        ) AS proxDataHora,
        uptime
    FROM 
        ServidorStatus AS s1
) AS Subquery
WHERE 
    uptime = FALSE
    AND dataHora >= DATE_SUB(NOW(), INTERVAL 12 MONTH);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    tempoUptime,
    tempoDowntime
};