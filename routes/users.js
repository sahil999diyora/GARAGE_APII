var express = require('express');
var router = express.Router();
// var USER = require('../models/users');
// const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
var USER_CONTROLLER = require('../controllers/users')


router.post('/signup', USER_CONTROLLER.USER_SIGNUP);

router.post('/login', USER_CONTROLLER.USER_LOGIN);

router.get('/:id', USER_CONTROLLER.ONE_USER_FETCH);

router.get('/', USER_CONTROLLER.ALL_USER_FETCH);


module.exports = router;
