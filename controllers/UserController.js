const {User} = require('../models/User');
const Post = require('../models/Post');

const UserController = {

    async add(req, res){
        const user = new User({name: "Samuel", email: "320"});
        await user.save();
        
        res.status(201).json(user);
    }
}

module.exports = UserController;