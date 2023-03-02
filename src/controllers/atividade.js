const atividadeModel = require('../models/atividades')

async function createAtividade(item){
    console.log("TESTE", item)
    return atividadeModel.create(item);
}

async function updateStatusAtividade(item){
    return atividadeModel.update({status: item.avaliacao},{
        where:{
            id: item.id_atividade
        }
    });
}

module.exports = {createAtividade, updateStatusAtividade}