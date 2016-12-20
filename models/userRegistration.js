var mongoose = require('mongoose');

//Create user registration schema
var registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    address: String,
    phoneNumber: {
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
    myDate: Date
});

var UserRegistration = mongoose.model('UserRegistration', registrationSchema);
module.exports = UserRegistration;
