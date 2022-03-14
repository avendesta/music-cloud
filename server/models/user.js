const mongoose = require('mongoose');

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
    lastname: {
        type: String,
        maxlength: 50
    },
    firstname: {
        type: String,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
}, {timestamps: true})

const User = mongoose.model('User', userSchema);

module.exports = { User }