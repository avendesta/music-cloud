const express = require("express");
const mongoose = require('mongoose')
const { requireAuth } = require('../middleware/protect')

const routers = express.Router();
const {getById, getByMusicId, addComment} = require("../controllers/commentController");

routers.get("/:id", getById)
routers.post("/", requireAuth, addComment);
routers.get("/music/:id", getByMusicId);


module.exports = routers;