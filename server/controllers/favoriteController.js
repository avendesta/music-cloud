const dao = require("../dao/favoriteDao");

// get all
async function getAll(req, res) {
    const result = await dao.getAll()
    return res.status(200).json({status: true, data: result});
}

// get by id
async function getByUser(req, res) {
  const userId = req.params.userId;
  const result = await dao.getByUserId(userId)
  return res.status(200).json({status:true, data:result});
}

// get by music id
async function getByMusic(req, res) {
  const musicId = req.params.musicId;
  const result = await dao.getByMusicId(musicId)
  return res.status(200).json({status:true, data:result});
}

// add one
function addOne(req, res) {
  const favorite = req.body;    
  dao.addOne(favorite);
  return res.status(201).json({ status: true });
}

// delete one
function deleteOne(req, res) {
  const id = req.params.id;
  dao.removeOne(id);
  return res.status(200).json({ status: true });
}

module.exports = {
  getAll,
  getByUser,
  addOne,
  getByMusic,
  deleteOne
};
