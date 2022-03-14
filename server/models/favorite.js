const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const favoriteSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    musicId: {
        type: ObjectId,
        ref: 'Music'
    }
}, { timestamps: true })

module.exports = mongoose.model('Favorite', favoriteSchema)