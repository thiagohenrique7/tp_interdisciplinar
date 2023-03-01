const usersModel = require('../models/users')
const {Op} = require("sequelize")

async function createUser(item){
    return usersModel.create(item);
}
async function getUsers(){
    const users = await usersModel.findAll();
    return users;
}

async function getUserLogin(item){
    const user = await usersModel.findAll({
        where:{
            [Op.or]:[
                {RA: item.user},
                {email: item.user},
            ],
            [Op.and]:[
                {password: item.password}
            ]
        }
    })
    if(user.length > 0){
        return {sucess: true, user: user[0]}
    }
    else{
        return {sucess: false, err: "Usuário ou senha inválidos"}
    }
}

module.exports = {createUser, getUsers, getUserLogin}
