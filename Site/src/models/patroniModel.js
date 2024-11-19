var database = require("../database/config")

function cadastrarLinha() {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarLinha():");

    var instrucaoSql = `
        select idEstacao, linha from Estacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarServidor() {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarServidor():");

    var instrucaoSql = `
        select MacAddress, nome from Servidor;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function frequenciaCpuGrafico(linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function frequenciaCpuGrafico():");

    var instrucaoSql = `
       SELECT TIME(R.dtHora) AS hora, 
       R.porcentagemProcessador AS porcentagemProcessador
       FROM Registro R
       JOIN Servidor S ON R.fkServidor = S.MacAddress
       JOIN Estacao E ON E.fkServidor = S.MacAddress
       WHERE E.linha = 'Linha Verde' AND S.nome = 'Servidor 1'
       ORDER BY R.dtHora DESC LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql + `\nCom parâmetros: linha = ${linha}, servidor = ${servidor}`);
    return database.executar(instrucaoSql, [linha, servidor]);
}

function frequenciaRamGrafico(linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function frequenciaRamGrafico():");

    var instrucaoSql = `
       SELECT TIME(R.dtHora) AS hora, 
       R.porcentagemMemoria
       FROM Registro R
       JOIN Servidor S ON R.fkServidor = S.MacAddress
       JOIN Estacao E ON E.fkServidor = S.MacAddress
       WHERE E.linha = 'Linha Verde' AND S.nome = 'Servidor 1'
       ORDER BY R.dtHora DESC LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql + `\nCom parâmetros: linha = ${linha}, servidor = ${servidor}`);
    return database.executar(instrucaoSql, [linha, servidor]);
}

function frequenciaDiscoGrafico(linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function frequenciaDiscoGrafico():");

    var instrucaoSql = `
        SELECT R.porcentagemDisco as discoUsado, 
        (100 - R.porcentagemDisco) as discoDisponivel
        FROM Registro R JOIN Servidor S ON R.fkServidor = S.MacAddress
        ORDER BY R.dtHora DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql + `\nCom parâmetros: linha = ${linha}, servidor = ${servidor}`);
    return database.executar(instrucaoSql, [linha, servidor]);
}

function comparacaoCpuRam(linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function comparacaoCpuRam():");

    var instrucaoSql = `
       SELECT 
        TIME(R.dtHora) AS hora,
        R.porcentagemProcessador,
        R.porcentagemMemoria
        FROM Registro R
        JOIN Estacao E ON E.fkServidor = R.fkServidor
        JOIN Servidor S ON S.MacAddress = R.fkServidor
        WHERE E.linha = 'Linha Verde' AND S.nome = 'Servidor 1'
        ORDER BY R.dtHora DESC LIMIT 8;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql + `\nCom parâmetros: linha = ${linha}, servidor = ${servidor}`);
    return database.executar(instrucaoSql, [linha, servidor]);
}

function pacotesRecebidos(linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pacotesRecebidos():");

    var instrucaoSql = `
        Select R.pacotesRecebidos as pacotesRecebidos 
        from Registro R
        JOIN Estacao E 
        ON R.fkServidor = E.fkServidor
        WHERE E.linha = 'Linha Verde'
        AND R.fkServidor = '00:00:00:00:00:00'
        ORDER BY R.dtHora DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql + `\nCom parâmetros: linha = ${linha}, servidor = ${servidor}`);
    return database.executar(instrucaoSql, [linha, servidor]);
}

function comparacaoDisco(linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function comparacaoDisco():");

    var instrucaoSql = `
       SELECT 
        r.porcentagemDisco AS DiscoUsado,
        (100 - r.porcentagemDisco) AS DiscoDisponivel,
        s.nome AS Servidor
        FROM Registro r
        JOIN Servidor s ON r.fkServidor = s.MacAddress
        JOIN Estacao e ON e.fkServidor = s.MacAddress
        WHERE e.linha = 'Linha Verde'
        AND r.dtHora = (
            SELECT MAX(r2.dtHora)
            FROM Registro r2
            WHERE r2.fkServidor = r.fkServidor
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql + `\nCom parâmetros: linha = ${linha}, servidor = ${servidor}`);
    return database.executar(instrucaoSql, [linha, servidor]);
}



module.exports = {
    cadastrarLinha,
    cadastrarServidor,
    frequenciaCpuGrafico,
    frequenciaRamGrafico,
    frequenciaDiscoGrafico,
    comparacaoCpuRam,
    pacotesRecebidos,
    comparacaoDisco
};