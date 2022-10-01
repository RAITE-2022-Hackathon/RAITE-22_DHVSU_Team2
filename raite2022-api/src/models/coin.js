const Datatypes = require('sequelize')
const sequelize = require("../database/index")

const coin = sequelize.define("product", {
    coinName:{
        type: Datatypes.STRING,
        allownull: false,
    },

} , sequelize.sync({alter:true}))

module.exports = coin