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

// retrieve a favorite by Musicid
exports.getByMusicId = async function(musicId){
    const result = await Favorite.find({music: musicId})
    // console.log("getByMusicId: ",result)
    return result;
}

// add a favorite
exports.addOne = async function(body){
    const favorite = new Favorite(body)
    const result = await favorite.save()
    // console.log("addOne:",result)
    return true
}

// delete a favorite by id
exports.removeOne = async function(id){
    // db.favorite = db.favorite.filter(s => s.id != id)
    // console.log("delete Favorite:", id)
    await Favorite.deleteOne({_id: id})
    return true
}
