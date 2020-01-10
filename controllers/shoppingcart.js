//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const shoppingCart = require('../models/shoppingCart');

router.get('/',(req,res) => {
    shoppingCart.getAllShoppingCarts((err, list)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, shoppingCarts:list},null,2));
            res.end();
		}
    });
});

router.get('/:id',(req,res) => {
	let userId = req.params.id;
    shoppingCart.getUserShoppingCart(userId, (err, list)=> {
        if(err) {
            res.json({success:false, message: `Failed to get shoppingCart. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, shoppingCart: list},null,2));
            res.end();
		}
    });
});

router.post('/', (req,res,next) => {
    let newShoppingCart = {
        userId: req.body.userId,
		tripId: req.body.tripId,
		reservedPlaces: req.body.reservedPlaces,
		price: req.body.price
    };
    shoppingCart.addTripToShoppingCart(newShoppingCart,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to add shopping. Error: ${err}`});
        }
        else {
            res.json({success:true, message: "Product added successfully."});
		}

    });
});

router.delete('/:userid/:id/:price', (req,res,next)=> {
    let body = {
		id: req.params.id,
		userId: req.params.userid,
		price: req.params.price
	}
	
    shoppingCart.deleteTripFromShoppingCartById(body, (err,trip) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the trip. Error: ${err}`});
        }
        else if(trip) {
            res.json({success:true, id: body.id, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

router.delete('/', (req,res,next)=> {
    shoppingCart.deleteAllShoppingCarts((err,trip) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the trip. Error: ${err}`});
        }
        else if(trip) {
            res.json({success:true, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

module.exports = router;