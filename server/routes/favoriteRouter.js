const express = require('express');
const controller = require('../controllers/favoriteController')
const router = express.Router();

router.get("/", controller.getAll)
router.get("/user/:userId", controller.getByUser);
router.get("/music/:musicId", controller.getByMusic);
router.post("/", controller.addOne);
router.delete("/:id", controller.deleteOne);

module.exports = router;