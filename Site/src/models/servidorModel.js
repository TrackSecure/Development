var database = require("../database/config")

function cadastrar(nome, so, disco, memoria, cpu) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, so, disco, memoria, cpu);

    var instrucaoSql = `
        INSERT INTO Funcionario (nome, sistOperacional, memoriaTotal, discoTotal, freqMaxProcessador, fkEmpresa) VALUES ('${nome}', '${so}', '${disco}', '${memoria}', '${cpu}', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};