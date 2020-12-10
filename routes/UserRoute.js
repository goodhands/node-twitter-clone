const UserController = require('../controllers/UserController');
const upload = require('../services/ImageUpload');

module.exports = (router) => {
    router.route('/users')
            .post(UserController.register)
            .get(UserController.all);

    router.route('/users/:username')
            .put(UserController.update)
            .get(UserController.get);

    router.route('/login')
        .post(UserController.login);

    router.post('/register', upload.single('picture'), UserController.register);    
};