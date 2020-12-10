const {User} = require('../models/User');
const { BadRequest, NotFound } = require('../services/ErrorHandling');

let response = {};

const UserController = {

    async all(req, res){
        User.find({}, (error, users) => {
            if(error){
                throw new BadRequest("An error occured and we couldn't fulfil your request");
            }

            response.status = 200;
            response.message = "Success";
            response.data = users;

            res.status(response.status).json(response);
        })

    },

    async get(req, res, next){
        User.find({username: req.params.username}).then(user => {

            if(user.length == 0 || !user) {
                throw new NotFound("Sorry, that user does not exist");
            }else{
                response.status = 200;
                response.message = "Success";
                response.data = user;

                res.status(response.status).json(response);
            }

        }).catch(err => {
            next(err);
        })
    },

    async update(req, res){
        const user = new User({
            name: req.body.name, 
            email: req.body.email, 
            username: req.body.email, 
            password: req.body.password,
            picture: req.file
        }).then(response => {

        }).catch(error => {

        });
    },

    async register(req, res, next){

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            picture: req.file.filename
        });

        user.save().then(response => {
            res.status(201).json(response); 
        }).catch(err => {
            next(err);
        })
    },

    async login(req, res){

    }
}

module.exports = UserController;