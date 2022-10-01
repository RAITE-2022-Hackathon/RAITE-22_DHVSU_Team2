const Comment = require('../../models/comment')
const Post = require ('../../models/post')
const User = require ('../../models/user')


const ADD_COMMENT = async (req , res) => {
    try {
        const {commentDetailes} = req.body
        const {id} = req.params
        //console.log(id)
        const findPost = await Post.findOne({
            include:{
                model:User
            },
            where:{
                id:id
            }
        })
        if(!findPost){
            return res.send({
                message: "No Post Found",
            })
        }
        const userId = findPost.user.id
        const postId = findPost.id
        const createComment =  await Comment.create({commentDetailes, userId, postId })
        if(!createComment){
            return res.send({
                message: "Cannot Create Comment",
            })
        }
        //console.log(createComment)
        res.send({
            message:"Success",
            data:{
                postDetailes: findPost.postDetailes,
                commentDetailes: commentDetailes,
                userName: findPost.user.userName
            }
        })
    } catch (error) {
        res.send({
            message: error.message
        })
    }
    
}
const UPDATE_COMMENT = async (req , res) => {
    try {
        const {id} = req.params
        const commentDetailes = req.body

        const findComment = await Comment.findOne({where:{id}})
        if(!findComment){
            return res.send({
                message:"Comment do not exist"
            })
        }
        const editComment = await Comment.update(commentDetailes, {where:{id}})
        if(!editComment){
            return res.send({
                message:"Cannot Edit Comment"
            })
        }
        res.send({
            message:"Edited SuccessFully",
            data:{
                commentDetailes:commentDetailes
            }
        })
    } catch (error) {
        res.send({
            message: error.message
        })
    }
    
}
const DELETE_COMMENT = async (req , res) => {
    try {
        const {id} = req.params

        const findComment = await Comment.findOne({where:{id}})
        if(!findComment){
            return res.send({
                message:"Comment do not exist"
            })
        }
        const editComment = await Comment.destroy({where:{id}})
        if(!editComment){
            return res.send({
                message:"Cannot Edit Comment"
            })
        }
        res.send({
            message:"Deleted SuccessFully",
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
    
}

module.exports ={
    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
}