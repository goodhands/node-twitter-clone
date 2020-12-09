const {User} = require('../models/User');
const Post = require('../models/Post');

const UserController = {

    async all(req, res){
        res.status(200).json({users: [{name: "Sam", email: "sam@mail.com"}, {name: "Josh", email: "josh@jo.com"}]});
    },

    async get(req, res){

    },

    async register(req, res){
        const user = new User({name: "Samuel", email: "320"});
        await user.save();
        
        res.status(201).json(user);
    },

    async login(req, res){

    }
}

module.exports = UserController;