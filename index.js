var application_root = __dirname;
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

app.use(express.static(path.join(application_root, 'client')));
// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {

    var user = require('./routes/user');
    app.use('/user', user);
    //Load the models
    app.models = require('./models/index');

    //Load the routes
    var routes = require('./routes');

    //Selecting node-restful route path
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });

    console.log('Listening on port 3000...');
    app.listen(3000);
});
