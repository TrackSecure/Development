var database = require("../database/config")

function cadastrar(nome, linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, linha, servidor);

    var instrucaoSql = `
        INSERT INTO Estacao (nome, linha, fkServidor) VALUES ('${nome}', '${linha}', ${servidor});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarEstacoes(fkEmpresa) {

    var instrucaoSql = `SELECT idEstacao, nome FROM Estacao WHERE fkEmpresa = ${fkEmpresa};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(idEstacao, linha, servidor) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idEstacao, linha, servidor);

    var instrucaoSql = `
        UPDATE Estacao SET linha = '${linha}', fkServidor = ${servidor} WHERE idEstacao = ${idEstacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listarEstacoes,
    atualizar
};