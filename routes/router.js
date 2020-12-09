const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/name', (req, res) => UserController.add(req, res));

module.exports = router;