var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserImage = require('../models/userImage');
var UserRegistration = require('../models/userRegistration');
var Login = require('../models/userLogin');
var Contacts = require('../models/contacts')

router.get('/image/:id', function(req, res, next) {
    return UserImage.findById(req.params.id, function(err, user) {
        if (!err) {
            return res.send(user);
        } else {
            console.log('Not null');
            return console.log(err);
        }
    });
});

/* POST /todos */
router.post('/image', function(req, res, next) {
    var userImage = new UserImage({
        _id: req.body.id,
        fileName: req.body.fileName,
        url: req.body.url,
        contentType: req.body.contentType,
        size: req.body.size
    });

    return userImage.save(function(err) {
        if (!err) {
            return res.send(userImage);
        } else {
            console.log(err);
        }
    });
});

//Update image
router.put('/image/:id', function(req, res) {
    UserImage.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//post registration from data
router.post('/registration', function(req, res, next) {
    var registration = new UserRegistration({
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,

    });

    return registration.save(function(err) {
        if (!err) {
            return res.send(registration);
        } else {
            console.log(err);
        }
    });
});

//get registration data
router.get('/registration/:id', function(req, res, next) {
    return UserRegistration.findById(req.params.id, function(err, registration) {
        if (!err) {
            return res.send(registration);
        } else {
            return console.log(err);
        }
    })
});

router.put('/registration/:id', function(req, res) {
    UserRegistration.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//Validate login credentials
router.post('/login', function(req, res, next) {
    return UserRegistration.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, registration) {
        if (err) {
            console.log(err);
        } else {
            return res.send(registration);
        }
    });

});
//Contact post method
router.post('/contact', function(req, res, next) {
    var contact = new Contacts({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        designation: req.body.designation,
        dob: req.body.dob,
        contactImage: {
            fileName: req.body.fileName,
            url: req.body.url,
            contentType: req.body.contentType,
            size: req.body.size
        },
        address: req.body.address
    });

    return contact.save(function(err) {
        if (!err) {
            return res.send(contact);
        } else {
            console.log(err);
        }
    });
});

//Contact get method
router.get('/contact', function(req, res, next) {
    return Contacts.find(function(err, contact) {
        if (!err) {
            return res.send(contact);
        } else {
            return console.log(err);
        }
    });
});

router.get('/contact/:id', function(req, res, next) {
    return Contacts.findById(req.params.id, function(err, contact) {
        if (!err) {
            return res.send(contact);
        } else {
            return console.log(err);
        }
    });
});

router.put('/contact/:id', function(req, res) {
    Contacts.findByIdAndUpdate(req.params.id, req.body, function(err, contact) {
        if (err) {
            return console.log(err);
        } else {
            return res.send(contact);
        }
    });
});

router.delete('/contact/:id', function(req, res) {
    Contacts.remove({
        _id: req.params.id
    }, function(err, user) {
        if (err)
            return res.send(err);
        res.json({
            message: 'Deleted'
        });
    });
});

module.exports = router;
