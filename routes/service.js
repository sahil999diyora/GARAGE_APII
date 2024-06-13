var express = require('express');
var router = express.Router();
// var SERVICE = require('../models/service');
var SERVICE_CONTROLLER = require('../controllers/service')

router.post('/add', SERVICE_CONTROLLER.ADD_SERVICE);

router.delete('/:id', SERVICE_CONTROLLER.DELETE_SERVICE);

router.put('/:id', SERVICE_CONTROLLER.UPDATE_SERVICE);

router.get('/:id', SERVICE_CONTROLLER.ONE_SERVICE_FETCH);

router.get('/', SERVICE_CONTROLLER.ALL_SERVICES_FETCH);


module.exports = router;
