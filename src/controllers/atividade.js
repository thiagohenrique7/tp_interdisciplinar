const atividadeModel = require('../models/atividades')

async function createAtividade(item){
    console.log("TESTE", item)
    return atividadeModel.create(item);
}
async function deleteAtividade(id_ativ){
    console.log("TESTE", id_ativ)
    return atividadeModel.destroy({
        where:{
            id: id_ativ
        }
    });
}
async function getAtividadesPoId(item){
    console.log("TESTE", item)
    return await atividadeModel.findAll({
        where:{
            id_user: item.idUser,
            tipo_id: item.idTipo
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

module.exports = {createAtividade, updateStatusAtividade, getAtividadesPoId, deleteAtividade}