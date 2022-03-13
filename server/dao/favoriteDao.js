const Favorite = require('../models/favorite')

// retrieve all favorite
exports.getAll = async function(){
    const result = await Favorite.find({},{updatedAt: 0, __v: 0})
    console.log("getAll: ",result)
    return result;
}

// retrieve a favorite by id
exports.getById = function(id){
    // return db.favorite.filter(s => s.id==id)
    return "implement";
}

// add a favorite
exports.addOne = async function(body){
    const favorite = new Favorite(body)
    const result = await favorite.save()
    console.log("addOne:",result)
    return true
}

// delete a favorite by id
exports.removeOne = function(id){
    // db.favorite = db.favorite.filter(s => s.id != id)
    return "implement";
    return true
}

// replace a favorite
exports.replaceOne = function(favorite){
    // db.favorite = db.favorite.filter(s => s.id != favorite.id)
    // db.favorite.push(favorite)
    return "implement";
    return true
}
