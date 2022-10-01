const Post = require("./post")
const Follow = require("./follow")
const watchList = require("./watchlist")
const Comment = require('./comment')
const coin = require('./coin')
const follow = require('./follow')
const sequelize = require("../database");

function importModels() {
    
    sequelize.sync({ alter: true });
}

module.exports = importModels;