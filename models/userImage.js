var mongoose = require('mongoose');

//Create user image schema
var userImageSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    fileName: String,
    url: String, // Should store the URL of image on S3.
    contentType: String,
    size: String
});

//Exports the model schema
var UserImage = mongoose.model('UserImage', userImageSchema);
module.exports = UserImage;
