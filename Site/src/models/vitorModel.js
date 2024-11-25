var database = require("../database/config");

function graficoTopProcessos(fkServidor) {
    var instrucaoSql = `
        SELECT 
            nome AS nome_processo, 
            usoMemoria AS uso_memoria
        FROM 
            Processo
        WHERE 
            fkServidor = ${fkServidor}
        ORDER BY 
            usoMemoria DESC
        LIMIT 5;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarProcessos() {
    var instrucaoSql = `
        SELECT COUNT(*) AS quantidade_processos
        FROM Processo
        WHERE fkServidor = '00:00:00:00:00:00';
    `;

    console.log("Executando a instrução SQL para contar processos: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarProcessosAcima() {
    var instrucaoSql = `
        SELECT COUNT(*) AS quantidade_processos_acima
        FROM Processo
        WHERE fkServidor = '00:00:00:00:00:00' AND usoMemoria > 5;
    `;

    console.log("Executando a instrução SQL para contar processos com mais de 5% de memória: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarProcessosMaliciosos() {
    var instrucaoSql = `
        SELECT nome AS nome_processo
        FROM Processo
        WHERE fkServidor = '00:00:00:00:00:00';
    `;

    console.log("Executando a instrução SQL para buscar nomes de processos maliciosos: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoTopProcessos,
    contarProcessos,
    contarProcessosAcima,
    buscarProcessosMaliciosos
};