const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GARAGE_SCHEMA = new Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


let SEND_SCHEMA = mongoose.model('garage', GARAGE_SCHEMA);

module.exports = SEND_SCHEMA;