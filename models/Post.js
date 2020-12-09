const mongoose = require('mongoose');
const { Schema } = mongoose;

const {userSchema} = require('./User');

const postSchema = new Schema({
    user: [userSchema],
    content:  String,
    metadata: {
        likes: Number,
        comments: Number
    },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;