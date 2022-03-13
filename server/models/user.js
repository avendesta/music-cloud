const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    lastname: {
        type: String,
        maxlength: 50
    },
})

const User = mongoose.model('User', userSchema);

module.exports = { User }