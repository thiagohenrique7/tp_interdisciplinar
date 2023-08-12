const Sequelize = require('sequelize');
const database = require('../database/db')

const Users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    RA: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    curso: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dataNasc: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

})

module.exports = Users;