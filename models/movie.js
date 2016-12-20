var mongoose = require('mongoose');

//Create movie schema
var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

//Exports the model schema
module.exports = MovieSchema;
