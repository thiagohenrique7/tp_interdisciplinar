const Sequelize = require('sequelize');
const database = require('../database/db')

const AvaliaAtividades = database.define('avalia_atividades',{
    id: {
        type : Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_professor:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_atividade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    avaliacao:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    

})

module.exports = AvaliaAtividades;