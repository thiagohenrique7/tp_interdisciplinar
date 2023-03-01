const cadastraAtividadeModel = require('../models/cadastro_atividades')

async function createCadastroAtividade(item){
    console.log("TESTE", item)
    return cadastraAtividadeModel.create(item);
}

module.exports = {createCadastroAtividade}