var express = require('express');
var router = express.Router();
// var REQUEST = require('../models/request');
var SECURE_CONTROLLER = require('../controllers/secure')
var REQUEST_CONTROLLER = require('../controllers/request')

router.post('/add', SECURE_CONTROLLER.SECURE_USER, REQUEST_CONTROLLER.ADD_REQUEST);

router.delete('/:id', SECURE_CONTROLLER.SECURE_USER, REQUEST_CONTROLLER.DELETE_REQUEST);

router.put('/:id', SECURE_CONTROLLER.SECURE_GARAGE, REQUEST_CONTROLLER.UPDATE_REQUEST);

router.get('/:id', REQUEST_CONTROLLER.ONE_REQUEST_FETCH);

router.get('/', REQUEST_CONTROLLER.ALL_REQUEST_FETCH);


module.exports = router;
