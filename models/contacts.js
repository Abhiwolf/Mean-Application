var mongoose = require('mongoose');

//Create Contact schema
var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        index: {
            unique: true,
        },
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: {
            unique: true
        }
    },
    designation: String,
    dob: Date,
    address: String
});

var Contacts = mongoose.model('Contacts', contactSchema);
module.exports = Contacts;
