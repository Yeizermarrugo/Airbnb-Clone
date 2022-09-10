const Sequelize = require('sequelize');

const  db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'Airbnb',
    port: 5432
})

module.exports = {
    db
}