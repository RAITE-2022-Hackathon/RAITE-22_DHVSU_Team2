const Datatypes = require('sequelize')
const sequelize = require("../database/index")
const User = require("./user")

const Follow = sequelize.define("follow", {
    id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allownull: false,
    },
    userId:{
        type: Datatypes.INTEGER,
        allowNull:false
    },

    followId:{
        type: Datatypes.INTEGER,
        allowNull:false
    }

}, {timestamps:false})



module.exports = Follow