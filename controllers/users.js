var USER = require('../models/users');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.USER_SIGNUP = async function (req, res, next) {

    try {

        let BODY_DATA = req.body;

        if (!BODY_DATA.name || !BODY_DATA.email || !BODY_DATA.password || !BODY_DATA.confirm_password) {

            throw new Error("PLESE ENTER ALL THE FIELDS");

        }

        if (BODY_DATA.password != BODY_DATA.confirm_password) {
            throw new Error("PASSWORD AND CONFIRM PASSWORDS ARE NOT SAME")
        }

        BODY_DATA.password = await bcrypt.hash(BODY_DATA.password, 10)

        let DATA = await USER.create(BODY_DATA);

        let TOKEN = await jwt.sign({ user_key: DATA._id }, 'USER')

        res.status(201).json({
            message: "USER CREATED SUCESSFULLY !",
            DATA,
            TOKEN
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.USER_LOGIN = async function (req, res, next) {

    try {

        let BODY_DATA = req.body;

        if (!BODY_DATA.email || !BODY_DATA.password) {

            throw new Error("PLESE ENTER ALL THE FIELDS");

        }

        let CHEAK_USER = await USER.findOne({ email: BODY_DATA.email });

        if (!CHEAK_USER) {

            throw new Error("USER NOT FOUND");

        }

        let CHEAK_PASS = await bcrypt.compare(BODY_DATA.password, CHEAK_USER.password)

        if (!CHEAK_PASS) {
            throw new Error("PASSWORD IN WRONG OR INVALID");
        }

        res.status(201).json({
            message: "LOG IN SUCESSFULLY !"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ONE_USER_FETCH = async function (req, res, next) {

    try {

        let FIND_ID = req.params.id;

        let DATA = await USER.findById(FIND_ID);
        // let DATA = await USER.findById({ _id: FIND_ID });

        res.status(201).json({
            message: "ONE DATA FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ALL_USER_FETCH = async function (req, res, next) {

    try {

        let DATA = await USER.find();

        res.status(201).json({
            message: "ALL DATA FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}
