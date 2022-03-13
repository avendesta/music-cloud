const express = require('express')
const controller = require('../controllers/userController')

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.addOne)
router.delete("/:id", controller.deleteOne)
router.put("/", controller.replaceOne)


module.exports = router