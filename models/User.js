const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:  String,
    username: String,
    email:   String,
    picture: String,
    password: String,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = {User, userSchema};