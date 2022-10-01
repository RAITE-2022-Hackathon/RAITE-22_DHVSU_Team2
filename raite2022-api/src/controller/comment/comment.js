const Comment = require('../../models/comment')
const Post = require ('../../models/post')
const User = require ('../../models/User')


const ADD_COMMENT = async (req , res) => {
    try {
        const {commentDetailes} = req.body
        const {id} = req.params
        
        let findPost = await Post.findOne({
            where:{
                id
            },
            include:{
                model:User,
                attributes:['userName', 'id']
            }
        })

        console.log(findPost.attributes)

        const createComment =  await Comment.create({commentDetailes, })
        console.log(createComment)
        res.send({
            message:"Success",
            data:createComment
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