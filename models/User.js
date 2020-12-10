const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:  {
        type: String,
        required: [true, "Name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    picture: String,
    password: {
        type: String,
        min: [8, "Password must not be less than 8 characters"],
        max: [32, "Password may not be longer than 32 characters"]
    },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = {User, userSchema};