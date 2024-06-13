var jwt = require('jsonwebtoken');
var USER = require('../models/users');
var GARAGE = require('../models/garage');


exports.SECURE_USER = async function (req, res, next) {

    try {

        let TOKEN = req.headers.authorization;

        if (!TOKEN) {
            throw new Error("PLESE ATTECH TOKEN");
        }

        let CHEAK_TOKEN = await jwt.verify(TOKEN, 'USER');

        let CHEAK_USER = await USER.findById({ _id: CHEAK_TOKEN.user_key })

        if (!CHEAK_USER) {
            throw new Error("NO USER FOUND FOR THIS TOKEN");
        }

        next()

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.SECURE_GARAGE = async function (req, res, next) {

    try {

        let TOKEN = req.headers.authorization;
        console.log(TOKEN);
        if (!TOKEN) {
            throw new Error("PLESE ATTECH TOKEN");
        }

        let CHEAK_TOKEN = await jwt.verify(TOKEN, 'GARAGE');

        let CHEAK_GARAGE = await GARAGE.findById({ _id: CHEAK_TOKEN.garage_key })

        if (!CHEAK_GARAGE) {
            throw new Error("NO GARAGE FOUND FOR THIS TOKEN");
        }

        next()

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}