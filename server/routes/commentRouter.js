const express = require("express");
const mongoose = require('mongoose')

const routers = express.Router();
const {getByMusicId, addComment} = require("../controllers/commentController");

//get all comments
routers.post("/", addComment);
routers.get("/:id", getByMusicId);


module.exports = routers;