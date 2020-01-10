//Require mongoose package
const mongoose = require('mongoose');
const TripModel = require('./trip');
//Define BucketlistSchema with title, description and category
const ShoppingCartSchema = mongoose.Schema({
	userId: {
        type: String,
        required: true
    },
	products: [{tripId: String, reservedPlaces: Number}],
	totalPlaces: Number,
	totalPrice: Number
});

const ShoppingCart = module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema );

module.exports.getAllShoppingCarts = (callback) => {
    ShoppingCart.find(callback);
}

module.exports.getUserShoppingCart = (userId, callback) => {
	let query = {userId: userId};
    ShoppingCart.findOne(query, callback);
}

module.exports.addTripToShoppingCart = (newShoppingCart, callback) => {
	let query = {userId: newShoppingCart.userId, "products.tripId": newShoppingCart.tripId};
	let update = {$inc:{"totalPlaces":1, "products.$.reservedPlaces": 1, "totalPrice":newShoppingCart.price}};
	
	ShoppingCart.findOne(query, function(err, result) {
		if(result) {
			ShoppingCart.findOneAndUpdate(query, update, {upsert: true}, callback);
		}
		else {
			var newTrip = {"tripId": newShoppingCart.tripId, "reservedPlaces": newShoppingCart.reservedPlaces}
			let query2 = {userId: newShoppingCart.userId};
			let add = {$push: { products: newTrip }, $inc:{"totalPlaces":1, "totalPrice":newShoppingCart.price}};
			ShoppingCart.findOneAndUpdate(query2, add, {upsert: true}, callback);
		}
	});
}

module.exports.deleteAllShoppingCarts = (callback) => {
    ShoppingCart.remove(callback);
}

module.exports.deleteTripFromShoppingCartById = (body, callback) => {	
	let query = {"userId": body.userId, "products.tripId": body.id, "products.reservedPlaces": 1};
	ShoppingCart.findOne(query, function(err, result) {
		let query2 = {userId: body.userId, "products.tripId": body.id};
		if(result) {
			let pull = {$pull: {products: { "reservedPlaces": 1 } }, $inc: {"totalPlaces": -1,"totalPrice": -body.price}};
			ShoppingCart.findOneAndUpdate(query2, pull, {upsert: true}, callback);
		}
		else {
			let update = {$inc: { "products.$.reservedPlaces": -1,"totalPlaces": -1,"totalPrice": -body.price}};
			ShoppingCart.findOneAndUpdate(query2, update, callback);
		}
	});
}











