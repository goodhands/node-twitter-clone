const mongoose = require('mongoose');
const { userSchema } = require('./User');
const { Schema } = mongoose;

const commentSchema = new Schema({
    body:  String,
    user: [userSchema],
    metadata: {
        likes: Number
    },
    date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;