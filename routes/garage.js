var express = require('express');
var router = express.Router();
// var GARAGE = require('../models/garage');
// const bcrypt = require('bcrypt');
const multer = require('multer');
// var jwt = require('jsonwebtoken');
var GARAGE_CONTROLLER = require('../controllers/garage')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/garage')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })



router.post('/signup', upload.array('images', 10), GARAGE_CONTROLLER.GARAGE_SIGNUP);

router.post('/login', GARAGE_CONTROLLER.GARAGE_LOGIN);

router.get('/', GARAGE_CONTROLLER.ALL_GARAGE_FETCH);

router.get('/:id', GARAGE_CONTROLLER.ONE_GARAGE_FETCH);

router.put('/:update', upload.array('images', 10), GARAGE_CONTROLLER.GARAGE_UPDATE);

router.delete('/:delete', GARAGE_CONTROLLER.GARAGE_DELETE);

module.exports = router;
