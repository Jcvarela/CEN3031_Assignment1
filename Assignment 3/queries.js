/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');


// mongoose.connect(config.db.uri);
//
// var connection = mongoose.connection;
//
// connection.on("connected", function() {
//     // findLibraryWest();
//     // removeCable();
//     // updatePhelpsLab();
//     retrieveAllListings();
//     // console.log("connected!!!!");
// });



var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name:"Library West"}, function (err, obj){
      if(err) throw err;
      console.log(obj);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.remove({code:"CABL"}, function (err){
        if(err) throw err;
        console.log("remove Cable");
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
    Listing.findOneAndUpdate({name :"Phelps Laboratory"},{ address: '102 Phelps Lab, Gainesville, FL 32611' }, function (err, obj){
        if(err) throw err;
        console.log(obj);

        Listing.find({name :"Phelps Laboratory"},function (err, obj) {
            if(err) throw err;
            console.log(obj);
        });
    });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    Listing.find({}, function (err, obj){
        if(err) throw err;
        console.log(obj);
    });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
