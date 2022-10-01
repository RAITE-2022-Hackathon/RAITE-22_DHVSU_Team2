const Datatypes = require("sequelize")
const sequelize = require("../database/index")
const Comment = require('./comment')

const Post = sequelize.define("post",{
    postDetailes:{
        type:Datatypes.TEXT,
        allowNull:true
    }
})

Post.hasMany(Comment , {onDelete:"CASCADE"} ),
Comment.hasOne(Post , {onDelete:"CASCADE"})
module.exports = Post