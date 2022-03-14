const dao = require("../dao/favoriteDao");

// get all
async function getAll(req, res) {
    return res.status(200).json(await dao.getAll());
}

// get by id
async function getByUser(req, res) {
  const userId = req.params.userId;
  return res.status(200).json(await dao.getByUserId(userId));
}

// get by music id
async function getByMusic(req, res) {
  const musicId = req.params.musicId;
  return res.status(200).json(await dao.getByMusicId(musicId));
}

// add one
function addOne(req, res) {
  const favorite = req.body;    
  dao.addOne(favorite);
  return res.status(201).json({ result: "ok" });
}

// delete one
function deleteOne(req, res) {
  const id = req.params.id;
  dao.removeOne(id);
  return res.status(200).json({ result: "ok" });
}

module.exports = {
  getAll,
  getByUser,
  addOne,
  getByMusic,
  deleteOne
};
