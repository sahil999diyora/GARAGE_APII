var SERVICE = require('../models/service');

exports.ADD_SERVICE = async function (req, res, next) {

    try {

        let BODY_DATA = req.body;

        if (!BODY_DATA.name || !BODY_DATA.price || !BODY_DATA.garage) {

            throw new Error("PLESE ENTER ALL THE FIELDS");

        }

        let DATA = await SERVICE.create(BODY_DATA);

        res.status(201).json({
            message: "SERVICE CREATED SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.DELETE_SERVICE = async function (req, res, next) {

    try {

        let DELETE_ID = req.params.id;
        let DELETE = await SERVICE.findByIdAndDelete(DELETE_ID);

        res.status(201).json({
            message: "SERVICE DELETED SUCESSFULLY !",
            DELETE
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.UPDATE_SERVICE = async function (req, res, next) {

    try {

        let UPDATE_DATA = req.body;
        let UPDATE_ID = req.params.id;
        let UPDATE = await SERVICE.findByIdAndUpdate(UPDATE_ID, UPDATE_DATA, { new: true });

        res.status(201).json({
            message: "SERVICE UPDATED SUCESSFULLY !",
            UPDATE
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ONE_SERVICE_FETCH = async function (req, res, next) {

    try {

        let FIND_ID = req.params.id;

        let DATA = await SERVICE.findById(FIND_ID).populate('garage');

        res.status(201).json({
            message: "ONE SERVICES FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

exports.ALL_SERVICES_FETCH = async function (req, res, next) {

    try {

        let DATA = await SERVICE.find().populate('garage');

        res.status(201).json({
            message: "ALL SERVICES FETCH SUCESSFULLY !",
            DATA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}