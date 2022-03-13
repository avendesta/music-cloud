const dao = require("../dao/userDao");

// get all
function getAll(req, res) {
  //   return res.json(dao.getAll());
  return res.status(201).json("implement");
}

// get one by id
function getById(req, res) {
  const id = req.params.id;
  //   return res.json(dao.getById(id));
  return res.status(201).json("implement");
}

// add one
function addOne(req, res) {
  const user = req.body;
  //   dao.addOne(user);
  //   return res.status(201).json({ result: "ok" });
  return res.status(201).json("implement");
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
  const user = req.body;
  //   dao.replaceOne(user);
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
