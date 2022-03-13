const dao = require("../dao/favoriteDao");

// get all
async function getAll(req, res) {
    return res.status(200).json(await dao.getAll());
}

// get one by id
function getById(req, res) {
  const id = req.params.id;
  //   return res.json(dao.getById(id));
  return res.status(201).json("implement");
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
  //   dao.removeOne(id);
  //   return res.status(200).json({ result: "ok" });
  return res.status(201).json("implement");
}

// replace one
function replaceOne(req, res) {
  const favorite = req.body;
  //   dao.replaceOne(favorite);
  //   return res.status(200).json({ result: "ok" });
  return res.status(201).json("implement");
}

module.exports = {
  getAll,
  getById,
  addOne,
  deleteOne,
  replaceOne,
};
