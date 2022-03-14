
 const {Comment} = require('../models/comment')
exports.getByMusicId = async function(musicId){
    const result = await Comment.find({musicId},{updatedAt: 0, __v: 0})
    // console.log("musicId: ",result)
    return result;
}



// add a comment
exports.addComment = async function(_comment){
    const comment = new Comment(_comment)
    const result = await comment.save()
    // console.log("addComment:",result)
    return {status: true}
}

