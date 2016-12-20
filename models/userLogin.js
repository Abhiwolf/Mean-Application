var mongoose = require('mongoose');

//create schema for user login
var loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

var Login = mongoose.model('Login', loginSchema);
module.exports = Login;
