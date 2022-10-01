const Datatypes = require('sequelize')
const sequelize = require("../database/index")

const watchList = sequelize.define("watchList", {
    coinName:{
        type: Datatypes.STRING,
        allownull: false,
    },
})

module.exports = watchList