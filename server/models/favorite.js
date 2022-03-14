const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const favoriteSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    music: {
        type: ObjectId,
        ref: 'Music'
    }
}, { timestamps: true })

module.exports = mongoose.model('Favorite', favoriteSchema)