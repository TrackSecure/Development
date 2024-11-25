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

    console.log("Executando a instrução SQL para gráfico de top processos: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarProcessos(fkServidor) {
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS quantidade_processos
        FROM 
            Processo
        WHERE 
            fkServidor = ${fkServidor};
    `;

    console.log("Executando a instrução SQL para contar processos: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarProcessosAcima(fkServidor) {
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS quantidade_processos_acima
        FROM 
            Processo
        WHERE 
            fkServidor = ${fkServidor} AND usoMemoria > 12;
    `;

    console.log("Executando a instrução SQL para contar processos acima do esperado: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarProcessosMaliciosos(fkServidor) {
    var instrucaoSql = `
        SELECT 
            nome AS nome_processo
        FROM 
            Processo
        WHERE 
            fkServidor = '${fkServidor}';
    `;

    console.log("Executando a instrução SQL para buscar todos os processos: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoTopProcessos,
    contarProcessos,
    contarProcessosAcima,
    buscarProcessosMaliciosos
};
