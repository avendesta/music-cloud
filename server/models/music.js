const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = mongoose.Schema({
    uploader: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    artist: {
        type:String
    },
    title: {
        type:String,
        maxlength:30,
    },
    description: {
        type: String,
    },
    filePath : {
        type: String,
    },
    catogory: String,
    thumbnail: {
        type: String
    }
}, { timestamps: true })


const Music = mongoose.model('Music', musicSchema);

module.exports = { Music }