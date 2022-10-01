const Datatypes = require('sequelize')
const sequelize = require("../database/index")
const Post = require("./post")
const Follow = require("./follow")
const watchList = require("./watchlist")
const Comment = require('./comment')

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
    
})

user.hasMany(Post, {onDelete: "CASCADE"})
Post.belongsTo(user , {onDelete: "CASCADE"})

user.hasMany(watchList ,{onDelete:"CASCADE"})
watchList.belongsTo(user ,{onDelete:"CASCADE"})

user.hasMany(Comment, {onDelete:"CASCADE"})
Comment.belongsTo(user, {onDelete:"CASCADE"})

user.belongsToMany(user, {as: "Follower" , foreignKey: "userId", through: Follow , onDelete: "CASCADE", onUpdate:"Cascade"})
user.belongsToMany(user, {as: "Followed" , foreignKey: "followId", through: Follow , onDelete: "CASCADE", onUpdate:"Cascade"})

// user.belongsToMany(user, {as: "User" , foreignKey: "userId", through:"Likes", onDelete: "CASCADE", onUpdate:"Cascade"})
// Post.belongsToMany(Post, {as: "Post" , foreignKey: "postId", through:"Likes", onDelete: "CASCADE", onUpdate:"Cascade"})

module.exports = user