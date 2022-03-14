const express = require('express');
const controller = require('../controllers/favoriteController')
const router = express.Router();

router.get("/favorites", controller.getAll)
router.get("/:userId/favorites", controller.getByUser);
router.get("/music/:musicId/favorites", controller.getByMusic);
router.post("/addToFavorite", controller.addOne);
router.delete("/favorites/:id", controller.deleteOne);

module.exports = router;