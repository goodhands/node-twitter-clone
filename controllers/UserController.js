const {User} = require('../models/User');

let response = {};
response.status = 201;

const UserController = {

    async all(req, res){
        User.find({}, (error, users) => {
            if(error){
                response.status = 403;
                response.message = "Server Error";
                response.description = "An error occured and we couldn't fulfil your request";
            }

            response.status = 200;
            response.message = "Success";
            response.data = users;
        })

        res.status(response.status).json(response);
    },

    async get(req, res){

    },

    async update(req, res){

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