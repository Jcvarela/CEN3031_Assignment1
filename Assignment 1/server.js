
var express = require("express");
var path    = require("path");
var app = express();
var fs = require('fs');

var listingData;



/*
 //     Your request handler should send listingData in the JSON format if a GET request
 //     is sent to the '/listings' path. Otherwise, it should send a 404 error.
 //
 //     HINT: explore the request object and its properties
 //     http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
 //    */
app.get('/listings',function (req, res){
    res.send(listingData);
});

app.get('*', function(req, res){
    res.status(404).send("Bad gateway error");
});


fs.readFile('listings.json', 'utf8', function(err, data) {
    /*
     This callback function should save the data in the listingData variable,
     then start the server.
     */
    if(err){
        return console.log(err);
    }
    listingData = data;
    //start server
    app.listen("8080");
});

console.log("server listening on: http://localhost:8080");