var REQUEST = require('../models/request');

exports.ADD_REQUEST = async function (req, res, next) {

    try {

        let BODY_DATA = req.body;

        if (!BODY_DATA.garageid || !BODY_DATA.serviceid || !BODY_DATA.userid || !BODY_DATA.description) {

            throw new Error("PLESE ENTER ALL THE FIELDS");

        }

        let DATA = await REQUEST.create(BODY_DATA);

        res.status(201).json({
            message: "REQUEST CREATED SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.DELETE_REQUEST = async function (req, res, next) {

    try {
        console.log(req.params.id);
        let DELETE_ID = req.params.id;
        console.log(DELETE_ID);

        let DELETE = await REQUEST.findByIdAndDelete(DELETE_ID);

        res.status(201).json({
            message: "REQUEST DELETED SUCESSFULLY !",
            DELETE
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.UPDATE_REQUEST = async function (req, res, next) {
    try {
        let UPDATE_DATA = req.body;

        let STATUS_ENUM = ['pending', 'accept', 'decline', 'complete']

        if (UPDATE_DATA.status && !STATUS_ENUM.includes(UPDATE_DATA.status)) {
            throw new Error("PLESE ENTER VALID STATUS");
        }

        let UPDATE_ID = req.params.id;
        let UPDATE = await REQUEST.findByIdAndUpdate(UPDATE_ID, UPDATE_DATA, { new: true });

        res.status(201).json({
            message: "REQUEST UPDATED SUCESSFULLY !",
            UPDATE
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ONE_REQUEST_FETCH = async function (req, res, next) {

    try {

        let FIND_ID = req.params.id;

        let DATA = await REQUEST.findById(FIND_ID).populate(['garageid', 'userid', 'serviceid']);

        res.status(201).json({
            message: "ONE REQUESTS FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ALL_REQUEST_FETCH = async function (req, res, next) {

    try {

        let DATA = await REQUEST.find().populate(['garageid', 'userid', 'serviceid']);

        res.status(201).json({
            message: "ALL REQUESTS FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}