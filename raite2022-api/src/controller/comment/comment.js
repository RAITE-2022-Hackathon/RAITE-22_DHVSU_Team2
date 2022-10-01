const Comment = require('../../models/comment')
const Post = require ('../../models/post')


const ADD_COMMENT = async (req , res) => {
    const {createComment} = req.body
    const {postId} = req.query
    
}