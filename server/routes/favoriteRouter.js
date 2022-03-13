const express = require('express');
const controller = require('../controllers/favoriteController')
const router = express.Router();

router.get("/favorites", controller.getAll)
router.post("/addToFavorite", controller.addOne);
router.post("/removeFromFavorite", controller.deleteOne);
router.post("/getFavoredMusic", controller.getById);

module.exports = router;