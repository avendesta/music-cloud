const {Comment} = require('../models/comment')

exports.getById = async function(id){
    const result = await Comment.findOne({_id: id})
    return result
}
// get comment under a specific music
exports.getByMusicId = async function(musicId){
    const result = await Comment.find({underMusic:musicId}).populate('author', 'username email')
    return result
}

// add a comment
exports.addComment = async function(_comment){
    const comment = new Comment(_comment)
    const result = await comment.save()
    return true
}

