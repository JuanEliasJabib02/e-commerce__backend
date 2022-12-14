//npm
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config( {path:"./config.env"})

const db = new Sequelize({
    dialect:'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB,
    logging: false,// Activar si solo se necesita debugear
    dialectOptions:
     process.env.NODE_ENV ==='production'
         ? {
            ssl: {
                required:true,
                rejectUnauthorized:false,
            }
           }
        : {},
})

module.exports = { db , DataTypes } // Exporto datatypes para usarlo en la creacion de modelos