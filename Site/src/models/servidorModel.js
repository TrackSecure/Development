var database = require("../database/config")

function cadastrar(nome, so, disco, memoria, cpu, fkEmpresa) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, so, disco, memoria, cpu, fkEmpresa);

    var instrucaoSql = `
        INSERT INTO Servidor (nome, sistOperacional, memoriaTotal, discoTotal, freqMaxProcessador, fkEmpresa) VALUES ('${nome}', '${so}', ${disco}, ${memoria}, ${cpu}, ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarServidores(fkEmpresa) {

    var instrucaoSql = `SELECT idServidor, nome FROM Servidor WHERE fkEmpresa = ${fkEmpresa}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    cadastrar,
    listarServidores
};