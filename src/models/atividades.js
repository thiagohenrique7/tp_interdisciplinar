const Sequelize = require('sequelize');
const database = require('../database/db')

const Atividades = database.define('atividades',{
    id: {
        type : Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    carga_horaria:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tipo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }


})

module.exports = Atividades;