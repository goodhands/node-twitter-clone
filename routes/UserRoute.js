const UserController = require('../controllers/UserController');

module.exports = (router) => {
    router.route('/users')
          .get(UserController.all);

    router.route('/users/:username')
            .get(UserController.get);
};