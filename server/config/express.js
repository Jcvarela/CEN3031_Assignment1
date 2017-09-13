var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes'),
    getCoordinates = require('../controllers/coordinates.server.controller.js');

module.exports.init = function () {
    //connect to database
    mongoose.connect(config.db.uri);

    //initialize app
    var app = express();

    //enable request logging for development debugging
    app.use(morgan('dev'));

    // The body parser module is middleware that will allow you to access any data sent in requests as req.body.
    app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    /* server wrapper around Google Maps API to get latitude + longitude coordinates from address */
    app.post('/api/' +
        'coordinates', getCoordinates, function (req, res) {
        res.send(req.results);
    });

    /* serve static files */
    app.use('/', express.static(__dirname + '/../../client'));

    /* use the listings router for requests to the api */
    app.use('/api/listings',listingsRouter);



    return app;
};  