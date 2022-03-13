const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: ObjectId,
        ref: 'User'
    },
    musicId: {
        type: String
    },
    musicTitle: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Favorite', favoriteSchema)