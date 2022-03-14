const { Music } = require('../models/music')

// retrieve all music
exports.getAll = async function(){
    const result = await Music.find({})
    console.log("getAll: ",result)
    return result;
}

// retrieve a music by Userid
exports.getByUserId = async function(userId){
    const result = await Music.find({userId: userId})
    console.log("getByUserId: ",result)
    return result;
}

// retrieve a music by Musicid
exports.getByMusicId = async function(musicId){
    const result = await Music.find({musicId: musicId})
    console.log("getByMusicId: ",result)
    return result;
}

// add a music
exports.addOne = async function(music){
    const result = await new Music(music).save()
    console.log("addOne:",result)
    return true
}

// delete a music by id
exports.removeOne = async function(id){
    // db.music = db.music.filter(s => s.id != id)
    console.log("delete Music:", id)
    await Music.deleteOne({_id: id})
    return true
}
