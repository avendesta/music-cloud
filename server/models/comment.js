const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    author: {
        type: Shema.Types.ObjectId,
        ref: 'User'
    }, 
    underMusic: {
        type: Shema.Types.ObjectId,
        ref: 'Music'
        
    },
    
    content: {
        type: String,
        required: true
    }

}, { timestamps: true })


const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }

