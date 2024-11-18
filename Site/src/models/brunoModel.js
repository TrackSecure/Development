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

module.exports = {
    buscarQtdAlertas
};