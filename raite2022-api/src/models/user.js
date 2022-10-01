const Datatypes = require('sequelize')
const sequelize = require("../database/index")

const user = sequelize.define("user",{
    firstName:{
        type:Datatypes.STRING,
        allowNull:false
    },
    lastName:{
        type:Datatypes.STRING,
        allowNull:false
    },
    password:{
        type:Datatypes.STRING,
        allowNull:false
    },
    userName:{
        type:Datatypes.STRING,
        allowNull:false
    },
}, sequelize.sync({alter:true}))


module.exports = user