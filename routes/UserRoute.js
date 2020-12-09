const UserController = require('../controllers/UserController');

module.exports = (router) => {
    router.route('/users')
            .post(UserController.register)
            .get(UserController.all);

    router.route('/users/:username')
            .put(UserController.update)
            .get(UserController.get);
};