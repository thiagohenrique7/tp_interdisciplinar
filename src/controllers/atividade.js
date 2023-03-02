const atividadeModel = require('../models/atividades')

async function createAtividade(item){
    console.log("TESTE", item)
    return atividadeModel.create(item);
}
async function getAtividadesPoId(idUser){
    console.log("TESTE", idUser)
    return await atividadeModel.findAll({
        where:{
            id_user: idUser
        }
    })
}

async function updateStatusAtividade(item){
    console.log("TESTE", item)
    await atividadeModel.update({status: item.avaliacao},{
        where: {
            id: item.id_atividade
        }
    });
}

module.exports = {createAtividade, updateStatusAtividade, getAtividadesPoId}