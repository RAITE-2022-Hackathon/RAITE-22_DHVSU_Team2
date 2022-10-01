const Datatypes = require("sequelize")
const sequelize = require("../database/index")

const Comment = sequelize.define("post",{
    commentDetailes:{
        type:Datatypes.TEXT,
        allowNull:true
    }
})

module.exports = Comment