const Datatypes = require('sequelize')
const sequelize = require("../database/index")

const Follow = sequelize.define("follow", {
    id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allownull: false,
    },

}, {timestamps:false})


module.exports = Follow