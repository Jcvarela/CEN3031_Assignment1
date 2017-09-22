//var config = require('./config'),
var mongoose = require('mongoose'),
    express = require('./express');

module.exports.start = function() {
  var port = ( process.env.port || 8080);
  var app = express.init();
  app.listen(port, function() {
    console.log('App listening on port', port);
  });
};