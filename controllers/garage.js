var GARAGE = require('../models/garage');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.GARAGE_SIGNUP = async function (req, res, next) {

    try {

        let BODY_DATA = req.body;

        BODY_DATA.images = req.files.map(el => el.filename);

        if (!BODY_DATA.name || !BODY_DATA.images || !BODY_DATA.description || !BODY_DATA.mobile || !BODY_DATA.address || !BODY_DATA.email || !BODY_DATA.password || !BODY_DATA.confirm_password) {

            throw new Error("PLESE ENTER ALL THE FIELDS");

        }

        if (BODY_DATA.password != BODY_DATA.confirm_password) {
            throw new Error("PASSWORD AND CONFIRM PASSWORDS ARE NOT SAME")
        }

        BODY_DATA.password = await bcrypt.hash(BODY_DATA.password, 10)

        let DATA = await GARAGE.create(BODY_DATA);

        let TOKEN = await jwt.sign({ garage_key: DATA._id }, 'GARAGE');


        res.status(201).json({
            message: "GARAGE CREATED SUCESSFULLY !",
            DATA,
            TOKEN
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.GARAGE_LOGIN = async function (req, res, next) {

    try {

        let BODY_DATA = req.body;

        if (!BODY_DATA.email || !BODY_DATA.password) {

            throw new Error("PLESE ENTER ALL THE FIELDS");

        }

        let CHEAK_GARAGE = await GARAGE.findOne({ email: BODY_DATA.email });

        if (!CHEAK_GARAGE) {

            throw new Error("GARAGE NOT FOUND");

        }

        let CHEAK_PASS = await bcrypt.compare(BODY_DATA.password, CHEAK_GARAGE.password)

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

exports.GARAGE_UPDATE = async function (req, res, next) {

    try {

        let UPDATE_ID = req.params.update;
        let UPDATE_DATA = req.body;

        if (req.files && req.files.map(el => el.filename)) {
            UPDATE_DATA.images = req.files.map(el => el.filename)
        }

        let DATA = await GARAGE.findByIdAndUpdate(UPDATE_ID, UPDATE_DATA, { new: true });

        res.status(201).json({
            message: "GARAGE UPDATE SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.GARAGE_DELETE = async function (req, res, next) {

    try {

        let DELETE_ID = req.params.delete;

        let DATA = await GARAGE.findByIdAndDelete(DELETE_ID);
        // let DATA = await GARAGE.findByIdAndDelete({ _id: FIND_ID });

        res.status(201).json({
            message: "GARAGE DELETE SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ONE_GARAGE_FETCH = async function (req, res, next) {

    try {

        let FIND_ID = req.params.id;

        let DATA = await GARAGE.findById(FIND_ID);
        // let DATA = await GARAGE.findById({ _id: FIND_ID });

        res.status(201).json({
            message: "ONE GARAGE FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ALL_GARAGE_FETCH = async function (req, res, next) {

    try {

        let DATA = await GARAGE.find();

        res.status(201).json({
            message: "ALL GARAGE FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}