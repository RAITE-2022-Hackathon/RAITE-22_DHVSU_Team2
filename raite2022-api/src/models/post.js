const Datatypes = require("sequelize")
const sequelize = require("../database/index")

const Post = sequelize.define("post",{
    postDetailes:{
        type:Datatypes.TEXT,
        allowNull:true
    }
})

module.exports = Post