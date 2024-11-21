var database = require("../database/config")

function buscarQtdAlertas(fkServidor, prioridade, mes) {

    var instrucaoSql = `
    SELECT count(*) AS qtdAlertas FROM Alerta WHERE descricao LIKE 'CPU%' AND tipo = '${prioridade}' AND dtHora LIKE '%-${mes}-%' AND fkServidor = ${fkServidor}
    UNION ALL
    SELECT count(*) AS qtdAlertas FROM Alerta WHERE descricao LIKE 'Ram%' AND tipo = '${prioridade}' AND dtHora LIKE '%-${mes}-%' AND fkServidor = ${fkServidor}
    UNION ALL
    SELECT count(*) AS qtdAlertas FROM Alerta WHERE descricao LIKE 'Disco%' AND tipo = '${prioridade}' AND dtHora LIKE '%-${mes}-%' AND fkServidor = ${fkServidor}
    UNION ALL
    SELECT count(*) AS qtdAlertas FROM Alerta WHERE descricao LIKE 'CPU%' AND tipo = '${prioridade}' AND dtHora LIKE '%-11-%' AND fkServidor = ${fkServidor}
    UNION ALL
    SELECT count(*) AS qtdAlertas FROM Alerta WHERE descricao LIKE 'Ram%' AND tipo = '${prioridade}' AND dtHora LIKE '%-11-%' AND fkServidor = ${fkServidor}
    UNION ALL
    SELECT count(*) AS qtdAlertas FROM Alerta WHERE descricao LIKE 'Disco%' AND tipo = '${prioridade}' AND dtHora LIKE '%-11-%' AND fkServidor = ${fkServidor};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHorasDowntime(fkServidor, mes) {

    var instrucaoSql = `
    SELECT 10 *
    (ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 0 AND fkServidor = ${fkServidor} AND dataHora LIKE '%-${mes}-%') / 60, 2)) 
    AS Horas_Downtime
    UNION ALL
    SELECT 10 *
    (ROUND((SELECT COUNT(*) FROM ServidorStatus WHERE  uptime = 0 AND fkServidor = ${fkServidor} AND dataHora LIKE '%-11-%') / 60, 2)) 
    AS Horas_Downtime;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQtdAlertas,
    buscarHorasDowntime
};