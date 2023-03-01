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
    grupo:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tipo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    date_created:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    avaliada:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },

})

module.exports = Atividades;