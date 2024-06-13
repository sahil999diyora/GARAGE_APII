const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SERVICE_SCHEMA = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    garage: {
        type: Schema.Types.ObjectId,
        ref: 'garage',
        required: true
    }
})


let SEND_SCHEMA = mongoose.model('service', SERVICE_SCHEMA);

module.exports = SEND_SCHEMA;