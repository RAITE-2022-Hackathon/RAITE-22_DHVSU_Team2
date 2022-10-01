const Datatypes = require("sequelize")
const sequelize = require("../database/index")

const Comment = sequelize.define("comment",{
    commentDetailes:{
        type:Datatypes.TEXT,
        allowNull:true
    }
})

module.exports = Comment