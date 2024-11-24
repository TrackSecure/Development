var database = require("../database/config")

function qtdServidorSobrecarregado(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        COUNT(DISTINCT r.fkServidor) AS quantidadeServidores
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        WHERE 
        r.porcentagemProcessador > 80
        AND r.porcentagemMemoria > 80
        AND r.dtHora >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        AND s.fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function infoServidorSobrecarregado(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor,
        e.linha AS linhaAtendida,
        COUNT(DISTINCT e.idEstacao) AS quantidadeEstacoes,
        MAX(r.porcentagemProcessador) AS maxPorcentagemProcessador,
        MAX(r.porcentagemMemoria) AS maxPorcentagemMemoria
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        JOIN 
        Estacao e ON e.fkServidor = s.MacAddress
        WHERE 
        r.porcentagemProcessador > 80
        AND r.porcentagemMemoria > 80
        AND r.dtHora >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        AND s.fkEmpresa = ${fkEmpresa} 
        GROUP BY 
        s.MacAddress, e.linha
        ORDER BY quantidadeEstacoes DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdAlertaCPU(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        COUNT(porcentagemProcessador) AS quantidadeAlertaCPU
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        WHERE 
        r.porcentagemProcessador > 80
        AND r.dtHora >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        AND s.fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function infoAlertaCPU(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor,
        GROUP_CONCAT(DISTINCT e.linha) AS linhasAtendidas,
        COUNT(DISTINCT e.idEstacao) AS quantidadeEstacoes,
        (SELECT COUNT(*) 
        FROM Registro r 
        WHERE r.fkServidor = s.MacAddress 
        AND r.porcentagemProcessador > 80 
        AND r.dtHora >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AS registrosAcima80
        FROM Servidor s
        LEFT JOIN Estacao e ON s.MacAddress = e.fkServidor
        WHERE s.fkEmpresa = ${fkEmpresa}
        GROUP BY s.MacAddress
        HAVING registrosAcima80 > 0
        ORDER BY registrosAcima80 DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdAlertaRAM(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        COUNT(porcentagemMemoria) AS quantidadeAlertaRAM
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        WHERE 
        r.porcentagemMemoria > 80
        AND r.dtHora >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        AND s.fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function infoAlertaRAM(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor,
        GROUP_CONCAT(DISTINCT e.linha) AS linhasAtendidas,
        COUNT(DISTINCT e.idEstacao) AS quantidadeEstacoes,
        (SELECT COUNT(*) 
        FROM Registro r 
        WHERE r.fkServidor = s.MacAddress 
        AND r.porcentagemMemoria > 80 
        AND r.dtHora >= DATE_SUB(NOW(), INTERVAL 7 DAY)) AS registrosAcima80
        FROM Servidor s
        LEFT JOIN Estacao e ON s.MacAddress = e.fkServidor
        WHERE s.fkEmpresa = ${fkEmpresa}
        GROUP BY s.MacAddress
        HAVING registrosAcima80 > 0
        ORDER BY registrosAcima80 DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankCPU(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor, 
        MAX(r.porcentagemProcessador) AS maxPorcentagemProcessador
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        WHERE 
        r.dtHora >= CURDATE() - INTERVAL 7 DAY
        AND s.fkEmpresa = ${fkEmpresa}
        GROUP BY 
        r.fkServidor
        ORDER BY 
        maxPorcentagemProcessador DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function infoRankCPU(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor,
        GROUP_CONCAT(DISTINCT e.linha) AS linhasAtendidas,
        COUNT(DISTINCT e.idEstacao) AS quantidadeEstacoes,
        MAX(r.porcentagemProcessador) AS maxPorcentagemProcessador
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        LEFT JOIN 
        Estacao e ON s.MacAddress = e.fkServidor
        WHERE 
        r.dtHora >= CURDATE() - INTERVAL 7 DAY
        AND s.fkEmpresa = ${fkEmpresa}
        GROUP BY 
        s.MacAddress
        ORDER BY 
        maxPorcentagemProcessador DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankRAM(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor, 
        MAX(r.porcentagemMemoria) AS maxPorcentagemMemoria
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        WHERE 
        r.dtHora >= CURDATE() - INTERVAL 7 DAY
        AND s.fkEmpresa = ${fkEmpresa}
        GROUP BY 
        r.fkServidor
        ORDER BY 
        maxPorcentagemMemoria DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function infoRankRAM(fkEmpresa) {
    var instrucaoSql = `
        SELECT 
        s.nome AS nomeServidor,
        GROUP_CONCAT(DISTINCT e.linha) AS linhasAtendidas,
        COUNT(DISTINCT e.idEstacao) AS quantidadeEstacoes,
        MAX(r.porcentagemMemoria) AS maxPorcentagemMemoria
        FROM 
        Registro r
        JOIN 
        Servidor s ON r.fkServidor = s.MacAddress
        LEFT JOIN 
        Estacao e ON s.MacAddress = e.fkServidor
        WHERE 
        r.dtHora >= CURDATE() - INTERVAL 7 DAY
        AND s.fkEmpresa = ${fkEmpresa}
        GROUP BY 
        s.MacAddress
        ORDER BY 
        maxPorcentagemMemoria DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico(linha,mes) {
    var instrucaoSql = `
        SELECT estacao, quantidade_pessoas
        FROM webcrawler
        WHERE linha = '${linha}'
        AND mes = ${mes}
        ORDER BY quantidade_pessoas DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function wordCloud(linha,mes) {
    var instrucaoSql = `
        SELECT estacao, quantidade_pessoas
        FROM webcrawler
        WHERE linha = '${linha}'
        AND mes = ${mes}
        ORDER BY quantidade_pessoas DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    qtdServidorSobrecarregado,
    infoServidorSobrecarregado,
    qtdAlertaCPU,
    infoAlertaCPU,
    qtdAlertaRAM,
    infoAlertaRAM,
    rankCPU,
    infoRankCPU,
    rankRAM,
    infoRankRAM,
    grafico,
    wordCloud
};