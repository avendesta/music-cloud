const dao = require("../dao/commentDao");
//subscription

async function getById(req, res) {
  const id = req.params.id;
  const result = await dao.getById(id);
  return res.status(200).json({ status: true, data: result });
}
async function getByMusicId(req, res) {
  const musicId = req.params.id;
  const result = await dao.getByMusicId(musicId);
  return res.status(200).json({ status: true, data: result });
}

async function addComment(req, res) {
  const comment = req.body;
  const result = await dao.addComment(comment);
  return res.status(200).json({ status: true, data: result });
}

module.exports = { getById, getByMusicId, addComment };
