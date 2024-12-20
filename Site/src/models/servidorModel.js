var database = require("../database/config")

function cadastrar(nome, mac_addr, ip, so, disco, memoria, cpu, fkEmpresa) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, mac_addr, ip, so, disco, memoria, cpu, fkEmpresa);

    var instrucaoSql = `
        INSERT INTO Servidor (MacAddress, ip, nome, sistOperacional, memoriaTotal, discoTotal, freqMaxProcessador, fkEmpresa) VALUES ('${mac_addr}', '${ip}', '${nome}', '${so}', ${disco}, ${memoria}, ${cpu}, ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarServidores(fkEmpresa) {

    var instrucaoSql = `
    SELECT DISTINCT(MacAddress), Servidor.nome, linha FROM Servidor JOIN Estacao ON MacAddress = fkServidor WHERE fkEmpresa = ${fkEmpresa};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarServidoresCadastro(fkEmpresa) {

    var instrucaoSql = `
    SELECT DISTINCT(MacAddress), nome FROM Servidor WHERE fkEmpresa = ${fkEmpresa};`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(idServidor, so, disco, memoria, cpu) {
    console.log("ACESSEI O SERVIDOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idServidor, so, disco, memoria, cpu);

    var instrucaoSql = `
        UPDATE Servidor SET sistOperacional = '${so}', memoriaTotal = ${memoria}, discoTotal = ${disco}, freqMaxProcessador = ${cpu} WHERE MacAddress = ${idServidor};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listarServidores,
    listarServidoresCadastro,
    atualizar
};