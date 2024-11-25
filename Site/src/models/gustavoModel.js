var database = require("../database/config")

function qtdServidores(fkEmpresa) {

    var instrucaoSql = `SELECT COUNT(*) AS total_servidores FROM Servidor WHERE fkEmpresa = ${fkEmpresa};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function qtdAlertas(fkEmpresa) {

    var instrucaoSql = `
        SELECT COUNT(*) AS total_alertas
        FROM Alerta
        INNER JOIN Servidor ON Alerta.fkServidor = Servidor.MacAddress
        WHERE Servidor.fkEmpresa = ${fkEmpresa};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarServidores(fkEmpresa, linhaSelecionada) {
    console.log(`linha: ${linhaSelecionada}`);

    if (linhaSelecionada == "0") {
        var instrucaoSql = `
            SELECT 
                s.MacAddress, 
                s.nome AS nomeServidor,
                CASE 
                    WHEN COUNT(a.idAlerta) > 0 THEN true 
                    ELSE false 
                END AS temAlerta
            FROM 
                Servidor s
            LEFT JOIN 
                Alerta a ON a.fkServidor = s.MacAddress
            WHERE 
                s.fkEmpresa = ${fkEmpresa}
            GROUP BY 
                s.MacAddress, s.nome
            ORDER BY 
                temAlerta DESC, s.nome;`;

    } else if (linhaSelecionada != "0") {
        var instrucaoSql = `
        SELECT 
            s.MacAddress, 
            s.nome AS nomeServidor, 
            e.linha,
            CASE 
                WHEN COUNT(a.idAlerta) > 0 THEN true 
                ELSE false 
            END AS temAlerta
        FROM 
            Servidor s
        JOIN 
            Estacao e ON e.fkServidor = s.MacAddress
        LEFT JOIN 
            Alerta a ON a.fkServidor = s.MacAddress
        WHERE 
            s.fkEmpresa = ${fkEmpresa}
        AND 
            e.linha = "${linhaSelecionada}"
        GROUP BY 
            s.MacAddress, s.nome, e.linha
        ORDER BY 
            temAlerta DESC, s.nome;`;
    }

    return database.executar(instrucaoSql)
}

function listarLinhas() {
    const instrucaoSql = `
        SELECT DISTINCT linha 
        FROM Estacao;
    `;
    return database.executar(instrucaoSql);
}


function dadosMonitoramento(MacAddress) {
    var instrucaoSql = `
        SELECT 
            porcentagemProcessador, porcentagemMemoria, dtHora
        FROM 
            Registro
        WHERE 
            fkServidor = '${MacAddress}'
        ORDER BY 
            dtHora desc LIMIT 10; -- Retorna os últimos 10 registros
    `;
    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    qtdServidores,
    qtdAlertas,
    listarServidores,
    listarLinhas,
    dadosMonitoramento
};