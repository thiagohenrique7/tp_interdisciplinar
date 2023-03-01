const Sequelize = require('sequelize');
const database = require('../database/db')

const CadastroAtividade = database.define('cadastro_atividades',{
    id: {
        type : Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_atividade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    

})

module.exports = CadastroAtividade;