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
        default: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    catogory: String,
    thumbnail: {
        type: String,
        default: "https://bit.ly/3IbJYMw"
    }
}, { timestamps: true })


const Music = mongoose.model('Music', musicSchema);

module.exports = { Music }