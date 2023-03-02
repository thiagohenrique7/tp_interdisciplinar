const Sequelize = require('sequelize');
require('dotenv/config');
const sequelize = new Sequelize(
    'sql9602173', 'sql9602173', 'YkzPWmHElf',
    {
    dialect: 'mysql',
    host: 'sql9.freesqldatabase.com',
    port: 3306
  })
 
module.exports = sequelize;