const Post = require('../../models/post')
const User = require('../../models/user')


const CREATE_POST = async (req, res)=>{
    try {
        const {userName} = req.query
        const {postDetailes} = req.body
        const findUser = await User.findOne({where:{userName}})      
        if(!findUser){
            return res.send({
                message:"User does not exist"
            })
        }
        const id = findUser.id
        const createInfo = {
            userId:id,
            postDetailes:postDetailes
        }
        const createPost = await Post.create(createInfo)
        if(!createPost){
            return res.send({
                message:err.message
            })
        }
        res.send({
             message:"success in creating post",
             data:{
                postDetailes: postDetailes
             }
    })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
const UPDATE_POST = async (req, res)=>{
    try {
        const {id} = req.params
        const updateInfo = req.body
        const updatePost = await Post.update(updateInfo,{where:{id}})
        if(!updatePost){
            return res.send({
                message:"error in Updating post"
            })
        }
        res.send({
            message:"SuccessFully Updated"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}
const DELETE_POST = async (req, res)=>{
    try {
        const {id} = req.params
        const deletePost = await Post.destroy({where:{id}})
        if(!deletePost){
            return res.send({
                message:"error in deleting post"
            })
        }
        res.send({
            message:"SuccessFully Delete"
        })
    } catch (error) {
         res.status(500).send({
            message: error.message
        })
    }
}

const GET_ALL_POST_FROM_USER = async (req, res)=>{
    try {
        const {id} = req.params
        const findUser = await User.findOne({where:{id}})
        if(!findUser){
            return res.send({
                message:"User do not exist"
            })
        }
        let showAllPost = await Post.findAll({
            include:{
                model:User,
            },
            where:{
                userId:findUser.id
            }
        })
        console.log(showAllPost)
        if(showAllPost == 0){
            return res.send({
                message:"User haven't post anything yet"
            })
        }
        showAllPost = showAllPost.map(e => {
            return{
                postDetailes: e.postDetailes,
                userName: e.user.userName
            }
        })
        res.send({
            message:"success",
            data:showAllPost
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const GET_ALL_POST = async (req, res)=>{
    try {
        let getAllPost = await Post.findAll({
            include:[{
                model:User,
                attributes:['userName', 'firstName', 'lastName', 'birthDay' , 'email']
            }]
        })
        //const userInfo =  getAllPost.User.userName
        //console.log(userInfo)
        res.send({
            data:getAllPost
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
    
}

module.exports = {
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    GET_ALL_POST,
    GET_ALL_POST_FROM_USER
}