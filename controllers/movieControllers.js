var restful = require('node-restful');
module.exports = function (app, route) {
    //setup the controller for REST
    var rest = restful.model(
        'movie',
        app.models.movie
    ).methods(['get', 'put', 'post', 'delete']);

    //Register this end-point with application
    rest.register(app, route);
    //Return middleware
    return function (req, res, next) {
        next();
    };
};
