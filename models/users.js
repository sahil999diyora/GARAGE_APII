const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USER_SCHEMA = new Schema({
    name: {
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


let SEND_SCHEMA = mongoose.model('user', USER_SCHEMA);

module.exports = SEND_SCHEMA;