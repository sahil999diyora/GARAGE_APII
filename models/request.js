const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUEST_SCHEMA = new Schema({
    garageid: {
        type: Schema.Types.ObjectId,
        ref: 'garage',
        required: true
    },
    serviceid: {
        type: Schema.Types.ObjectId,
        ref: 'service',
        required: true
    },
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'accept', 'decline', 'complete'],
        default: 'pending'
    },
    description: {
        type: String,
        required: true
    }
})

let SEND_SCHEMA = mongoose.model('request', REQUEST_SCHEMA)

module.exports = SEND_SCHEMA;