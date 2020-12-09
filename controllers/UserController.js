const {User} = require('../models/User');
const { BadRequest } = require('../services/ErrorHandling');

let response = {};
response.status = 201;

const UserController = {

    async all(req, res){
        User.find({}, (error, users) => {
            if(error){
                new BadRequest("An error occured and we couldn't fulfil your request");
            }

            response.status = 200;
            response.message = "Success";
            response.data = users;
        })

        res.status(response.status).json(response);
    },

    async get(req, res){
        User.find({username: req.params.username}).then(user => {
            response.status = 200;
            response.message = "Success";
            response.data = user;

            if(user.length == 0) {
                response.message = "Username does not exist";
                response.status = 404;
                response.description = "Sorry, that user does not exist";
            }
        }).catch(err => {
            response.status = 403;
            response.message = "Server Error " + err;
            response.description = "Sorry, we couldn't find that user";
        })
            
        res.status(response.status).json(response);
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