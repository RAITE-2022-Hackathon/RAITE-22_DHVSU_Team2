const Comment = require('../../models/comment')
const Post = require ('../../models/post')
const User = require ('../../models/User')


const ADD_COMMENT = async (req , res) => {
    try {
        const {commentDetailes} = req.body
        const {postId} = req.params
        const {userName} = req.params

        const findUser = await User.findOne({where:{userName}})
        const userId = findUser.id
        const createComment = Comment.create({postId , commentDetailes , userId})
        res.send({
            message:"Success",
            data:commentDetailes
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
    
}
const UPDATE_COMMENT = async (req , res) => {
    try {
        const {createComment} = req.body
        const {postId} = req.query
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
    
}
const DELETE_COMMENT = async (req , res) => {
    try {
        const {createComment} = req.body
        const {postId} = req.query
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