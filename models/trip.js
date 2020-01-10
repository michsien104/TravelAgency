//Require mongoose package
const mongoose = require('mongoose');
const shoppingCart = require('./shoppingCart');

//Define BucketlistSchema with title, description and category
const TriplistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
	country: {
        type: String,
        required: true
    },
	since: Date,
    untill: Date,
	price:  {
        type: Number,
        required: true
    },
	totalPlaces:   {
        type: Number,
        required: true
    },
    description: String,
	image: String,
	availablePlaces:   {
        type: Number,
        required: true
    },
    rating: Number,
});

const TripList = module.exports = mongoose.model('TripList', TriplistSchema );

module.exports.getAllTrips = (callback) => {
    TripList.find(callback);
}

module.exports.deleteAllTrips = (callback) => {
    TripList.remove(callback);
}

module.exports.getTrip = (id, callback) => {
	let query = {_id: id};
    TripList.findOne(query, callback);
}

module.exports.addTrip = (newTrip, callback) => { 
    newTrip.save(callback);
}

module.exports.bookTrip = (id, callback) => {
    TripList.findOneAndUpdate({_id: id}, {$inc: {availablePlaces: -1}}, callback);
}

module.exports.unBookTrip = (id, callback) => {
    TripList.findOneAndUpdate({_id: id}, {$inc: {availablePlaces: 1}}, callback);
}

module.exports.deleteTripById = (id, callback) => {
    let query = {_id: id};
	TripList.findOne(query, function(err, trip){
		TripList.remove(query, function(err, result) {
			let query = { "products.tripId": id}
			let update = {$pull: {products: { "tripId": id } }, $inc:{"totalPrice": -trip.price}};
			//"totalPlaces":-1, 
			shoppingCart.update(query, update, callback);
		});
	});
	
}