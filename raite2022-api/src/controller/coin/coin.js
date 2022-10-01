const Coin = require("../../models/coin")
const productSchema = require("../../schemas/productSchema")


//queing , delivery, reservation
const ADD_COIN = async (req, res) =>{
    try {
        const {coinName} = req.body
        const checKCoinName = await Coin.findOne({where:{coinName}})
        if(checKCoinName){
            return res.status(400).send({
                message:"Coin Already Exist"
            })
        }
        const createCoin = await Coin.create(coinName)
        if(!createCoin){
            return res.status(400).send({
                message:"Failed to Add Product"
            })
        }
        res.status(200).send({
            message:"Successfully Added Product"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const DELETE_PRODUCT = async (req, res) =>{
    try {
        const {id} = req.params
        const findProductByPk = await Coin.findByPk(id)
        if(!findProductByPk){
            return res.status(400).send({message:"Product do not exist"})
        }
        const deleteProduct = await User.destroy({where:{id}})
        if(!deleteProduct){
            return res.status(400).send({message:"Failed to delete Product"})
        }
        res.status(200).send({message:"Successfully Deleted"})
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const UPDATE_PRODUCT = async (req, res) =>{
    try {
        const {id} = req.params
        const updateInfo = req.body
        const findProductById = await Coin.findByPk(id)
        if(!findProductById){
            return res.status(400).send({message:"Product Do Not Exist"})
        }
        const updateProduct = await Product.update(updateInfo,{where:{id}})
        if(!updateProduct){
            return res.status(400).send({message:"Update Failed"})
        }
        res.status(200).send({
            message:"Successfully Updated",
            data:req.body
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const SEARCH_PRODUCT_BY_NAME = async (req, res) =>{
    try {
        const {productName} = req.params
        const findProduct = await Coin.findOne({where:{productName}})
        if(!findProduct){
            return res.status(400).send({
                message: "Product Do Not Exist"
            })
        }
        res.status(200).send({
            message: "Success",
            data:{
                productName: productName,
                quantity: findProduct.quantity,
                description: findProduct.description
            }
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const GET_ALL_PRODUCT = async (req, res) =>{
    try {
        let getAllProduct = await Coin.findAll()
        getAllProduct = getAllProduct.map(e => {
            return {
                productName: e.productName,
                quantity: e.quantity,
                description: e.description
            }
        })
        res.status(200).send({
            message:"Success",
            data:{
                ...getAllProduct
            }
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        }) 
    }
}

module.exports = {
    ADD_COIN,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    SEARCH_PRODUCT_BY_NAME,
    GET_ALL_PRODUCT
}