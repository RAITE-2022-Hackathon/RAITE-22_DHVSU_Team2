const Datatypes = require('sequelize')
const sequelize = require("../database/index")
//const Post = require("./post")

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
    birthDay:{
        type:Datatypes.STRING,
        allowNull:true
    }
    
}, sequelize.sync({alter:true}))

//Post.belongsTo(user)
//user.hasMany(Post)

module.exports = user