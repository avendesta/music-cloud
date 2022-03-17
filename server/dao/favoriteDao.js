const Favorite = require('../models/favorite')

// retrieve all favorite
exports.getAll = async function(){
    const result = await Favorite.find({},{updatedAt: 0, __v: 0})
    // console.log("getAll: ",result)
    return result;
}

// retrieve a favorite by Userid
exports.getByUserId = async function(userId){
    const result = await Favorite.find({user:userId}).populate('music')
    // console.log("getByUserId: ",result)
    return result;
}

// retrieve a favorite by Userid
exports.getByUserMusicId = async function(userId, musicId){
    console.log("userId: ",userId)
    console.log("musicId: ",musicId)
    const result = await Favorite.findOne({user:userId, music: musicId})
    return result
}

// retrieve a favorite by Musicid
exports.getByMusicId = async function(musicId){
    const result = await Favorite.find({music: musicId})
    // console.log("getByMusicId: ",result)
    return result;
}

// add a favorite
exports.addOne = async function(body){
    console.log("body fav:",body)
    const favorite = new Favorite(body)
    const result = await favorite.save()
    console.log("add new favorite::", result)
    // console.log("addOne:",result)
    return result
}

// delete a favorite by id
exports.removeOne = async function(id){
    // db.favorite = db.favorite.filter(s => s.id != id)
    // console.log("delete Favorite:", id)
    await Favorite.deleteOne({_id: id})
    return true
}

// delete a favorite by id
exports.getTotalFavoritesByMusic = async function(musicId){
    const result = await Favorite.count({music: musicId})
    return result
}
