const Sequelize = require('sequelize');

const  db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'skeleton',
    port: 5432
})

module.exports = {
    db
}