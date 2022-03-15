const express = require('express');
const controller = require('../controllers/musicController')
const router = express.Router();

router.get("/", controller.getAll)
// router.get("/user/:userId", controller.getByUser);
router.get("/:musicId", controller.getById);
// router.post("/", controller.addOne);
// router.delete("/:id", controller.deleteOne);

module.exports = router;