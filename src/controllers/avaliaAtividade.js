const avaliaAtividades = require('../models/avalia_atividades')

async function createAvaliaAtividade(item){
    console.log("TESTE", item)
    return avaliaAtividades.create(item);
}

module.exports = {createAvaliaAtividade}