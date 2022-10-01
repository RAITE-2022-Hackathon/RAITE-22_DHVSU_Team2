const User = require("../../models/user")
const userSchema = require("../../schemas/userSchema")


const LOG_IN = async(req, res) =>{
    
}

const ADD_USER = async (req , res) =>{
    try {
        const userInfo = await userSchema.validateAsync(req.body)
        const {userName} = req.body
        console.log(req.file)
        const {image} = req.file
        
        const checkSameUser = await User.findOne({where:{userName}})
        if(checkSameUser){
            
            return res.status(400).send({
                message:"User Already Exist"
            })
        }
        const createUser = await User.create(userInfo, image)
        if(!createUser){
            return res.status(400).send({
                message:"Failed to Create User"
            })
        }
        res.status(200).send({
            message:"Successfully Created User"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const SEARCH_USER_BY_NAME = async (req , res) =>{
    try {
        const {userName} = req.params
        const findUser = await User.findOne({where:{userName}})
        if(!findUser){
            return res.status(400).send({
                message: "User do not exist"
            })
        }
        res.status(200).send({
            message: "Success",
            data:{
                firstName: findUser.userName,
                lastName: findUser.lastName,
                userName: userName,
                password: findUser.password
            }
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const UPDATE_USER = async (req, res) =>{
    try {
        const {id} = req.params
        const updateInfo = req.body
        const findUserById = await User.findByPk(id)
        if(!findUserById){
            return res.status(400).send({message:"User Do not Exist"})
        }
        const updateUser = await User.update(updateInfo,{where:{id}})
        if(!updateUser){
            return res.status(400).send({message:"Update Failed"})
        }
        res.status(200).send({message:"Successfully Updated"})
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const DELETE_USER = async (req, res) =>{
    try {
        const {id} = req.params
        const findUserById = await User.findByPk(id)
        if(!findUserById){
            return res.status(400).send({message:"User Do not Exist"})
        }
        const deleteUser = await User.destroy({where:{id}})
        res.status(200).send({message:"Successfully Deleted"})
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    ADD_USER,
    SEARCH_USER_BY_NAME,
    UPDATE_USER,
    DELETE_USER,
    LOG_IN
}