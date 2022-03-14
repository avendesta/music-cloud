const { Music } = require('../models/music')

// retrieve all music
exports.getAll = async function(){
    const result = await Music.find({})
    return result;
}

// retrieve a music by Userid
exports.getByUserId = async function(userId){
    const result = await Music.find({userId: userId})
    return result;
}

// retrieve a music by Musicid
exports.getByMusicId = async function(musicId){
    const result = await Music.find({musicId: musicId})
    return result;
}

// add a music
exports.addOne = async function(music){
    const result = await new Music(music).save()
    return true
}

// delete a music by id
exports.removeOne = async function(id){
    await Music.deleteOne({_id: id})
    return true
}
