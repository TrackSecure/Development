var database = require("../database/config")

function cadastrar(nome, bairro, estado, servidor, fkEmpresa) {
    console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, bairro, estado, servidor, fkEmpresa);

    var instrucaoSql = `
        INSERT INTO Estacao (nome, bairro, estado, fkServidor, fkEmpresa) VALUES ('${nome}', '${bairro}', '${estado}', ${servidor}, ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};