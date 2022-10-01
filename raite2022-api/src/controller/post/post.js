const Post = require('../../models/post')
const User = require('../../models/user')


const CREATE_POST = async (req, res)=>{
    try {
        const {id} = req.params
        const post = req.body
        console.log(id)
        const createPost = await Post.create({post, id})
        res.send({
            message:"success in creating post"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
const UPDATE_POST = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}
const DELETE_POST = async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}
const GET_ALL_POST = async (req, res)=>{
    const {userName} = req.params
    const findUser = await User.findOne({where:{userName}})
    const showAllPost = await Post.findAll({where:{id:findUser.id}})
}
module.exports = {
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_ALL_POST
}