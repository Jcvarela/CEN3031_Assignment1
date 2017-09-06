/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */

//set table format
var listingSchema = new Schema({
    code: {type: String, required: true, unique: false},
    name: {type: String, required: true, unique: false},
    address: {type: String, required: false, unique: false},
    coordinates: {
        latitude: {type: Number, required: false, unique: false},
        longitude: {type: Number, required: false, unique: false}
    }
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
// call when saving and updating DB
listingSchema.pre('save', function (next) {
    //Get current time
    var currentDate = new Date();

    //keeps track when was the last time the file got updated
    this.update_at = currentDate;

    // creates the time this item was created
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});


/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
