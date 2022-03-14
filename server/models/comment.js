const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    writer: {
        type: Shema.Types.ObjectId,
        ref: 'User'
    }, 
    musicId: {
        type: String,
    },
    
    content: {
        type: String
    }

}, { timestamps: true })


const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }

