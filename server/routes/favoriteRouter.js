const express = require('express');
const controller = require('../controllers/favoriteController')
const { requireAuth } = require('../middleware/protect')
const router = express.Router();

// router.get("/", controller.getAll)
router.get("/user/:userId", requireAuth, controller.getByUser);
router.get("/music/:id/total", requireAuth, controller.getTotalFavorites);
router.get("/music/:musicId", controller.getByMusic);
router.post("/", requireAuth, controller.addOne);
router.delete("/:id", requireAuth, controller.deleteOne);

module.exports = router;