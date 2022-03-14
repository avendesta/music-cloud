
 const {Comment} = require('../models/comment')
exports.getByMusicId = async function(musicId){
    const result = await Comment.find({musicId},{updatedAt: 0, __v: 0})
    console.log("musicId: ",result)
    return result;
}



// add a favorite
exports.addComment = async function(body){
    const comment = new Comment(body)
    const result = await comment.save()
    console.log("addComment:",result)
    return true
}

