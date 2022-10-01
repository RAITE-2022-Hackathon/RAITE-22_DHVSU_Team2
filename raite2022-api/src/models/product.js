const Datatypes = require('sequelize')
const sequelize = require("../database/index")

const product = sequelize.define("product", {
    productName:{
        type: Datatypes.STRING,
        allownull: false,
    },

    quantity:{
        type: Datatypes.INTEGER,
        allowNull:false
    },

    description:{
        type: Datatypes.STRING,
        allowNull:false
    }

} , sequelize.sync({alter:true}))

module.exports = product