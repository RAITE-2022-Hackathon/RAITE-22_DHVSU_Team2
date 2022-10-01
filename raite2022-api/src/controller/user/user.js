const User = require("../../models/user")
const userSchema = require("../../schemas/userSchema")
const logInSchema = require("../../schemas/logInSchema")
const user = require("../../models/user")
const Post = require("../../models/post")
const Follow = require("../../models/Follow")


const LOG_IN = async(req, res) =>{
    try {
        const {userName, password} = req.body
        const logInInfo = await logInSchema.validateAsync(req.body)
        const checkUser = await User.findOne({
            include:{
                model:Post,
                model:Follow
            }
        },{where:{userName}})
        if(checkUser){
            if(password == checkUser.password ){
                return res.send({
                    message:"Successfully Login",
                    data:{
                        id: checkUser.id,
                        firstName: checkUser.firstName,
                        lastName: checkUser.lastName,
                        userName: checkUser.userName,
                        password: checkUser.password
                    }
                })
            }else{
                return res.send({
                    message:"Invalid User / Password"
                })
            }
        }else{
            return res.send({
                message:"Invalid User / Password"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
    
}
const CREATE_USER = async (req , res) =>{
    try {
        const userInfo = await userSchema.validateAsync(req.body)
        const {userName} = req.body
        const checkSameUser = await User.findOne({where:{userName}})
        if(checkSameUser){
            return res.status(400).send({
                message:"User Already Exist"
            })
        }
        const createUser = await User.create(userInfo)
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

const FOLLOW_USER = async (req, res)=>{
    try {
        const {id} = req.params
        const {userName} = req.params
        const currentUser = await user.findOne({where:{id}})
        const toFollow = await user.findOne({where:{userName}})
        currentUser.addUser(toFollow)

        res.send({
            message:"followed"
        }, )
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const UNFOLLOW_USER = async (req, res)=>{
    try {
        const {id} = req.params
        const {userName} = req.params
        const currentUser = await user.findOne({where:{id}})
        const toUnfollow = await user.findOne({where:{userName}})
        currentUser.removeUser(toUnfollow)
        res.send({
            message:"unfollow"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const LIKE_POST = async (req, res)=>{
    try {

    } catch (error) {
        
    }
}   

const UNLIKE_POST = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports = {
    CREATE_USER,
    SEARCH_USER_BY_NAME,
    UPDATE_USER,
    DELETE_USER,
    LOG_IN,
    FOLLOW_USER,
    UNFOLLOW_USER
}