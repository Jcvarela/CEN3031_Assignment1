'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listingData = [];


mongoose.connect(config.db.uri);

var connection = mongoose.connection;

connection.on("connected", function() {
    console.log("Connected!!!!");
    setData();
});


/* Connect to your database */

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */


var setData = function() {
    return new Promise(function (resolve, reject) {
        fs.readFile('listings.json', 'utf8', function (err, data) {
            if (err) {
                return reject(err);
            }

            return resolve(JSON.parse(data));
        })
    }).then(function (input) {

        return new Promise(function (resolve, reject){
            Listing.remove({}, function(err){
                if(err) return reject( err);
                console.log("remove DB");

                return resolve();
            });
        }).then(function(){
            for (var obj in input["entries"]) {
                var entry = new Listing(input["entries"][obj]);

                //saving to the database
                entry.save(function (err) {
                    if (err) {
                        console.log("Fail to save User " + err)
                    } else {
                        console.log("User save successfully");
                    }
                });
            }
        });
    });
};