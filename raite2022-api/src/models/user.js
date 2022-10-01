const Datatypes = require('sequelize')
const sequelize = require("../database/index")
const Post = require("./post")

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
    },
    email:{
        type:Datatypes.STRING,
        allowNull:false
    }
    
}, sequelize.sync({alter:true}))

user.hasMany(Post)
Post.belongsTo(user)


module.exports = user