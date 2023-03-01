const atividadeModel = require('../models/atividades')

async function createAtividade(item){
    console.log("TESTE", item)
    return atividadeModel.create(item);
}

module.exports = {createAtividade}