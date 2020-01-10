//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const triplist = require('../models/trip');
var shortid = require('shortid');

router.get('/',(req,res) => {
    triplist.getAllTrips((err, trips)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, trips:trips},null,2));
            res.end();

    }
    });
});

router.get('/:id',(req,res) => {
	let id = req.params.id;
    triplist.getTrip(id, (err, trip)=> {
        if(err) {
            res.json({success:false, message: `Failed to load trip. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, trip:trip},null,2));
            res.end();

    }
    });
});

router.post('/', (req,res,next) => {
    let newTrip = new triplist({
        name: req.body.name,
		country: req.body.country,
		since: req.body.since,
		untill: req.body.untill,
		price: req.body.price,
		totalPlaces: req.body.totalPlaces,
		description: req.body.description,
		image: req.body.image,
		availablePlaces: req.body.availablePlaces,
		rating: req.body.rating
    });
    triplist.addTrip(newTrip,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new trip. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

router.post('/bookTrip/:id', (req,res,next) => {
    let id = req.params.id;
    triplist.bookTrip(id,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new trip. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

router.post('/unBookTrip/:id', (req,res,next) => {
    let id = req.params.id;
    triplist.unBookTrip(id,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new trip. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});


router.delete('/:id', (req,res,next)=> {
  //access the parameter which is the id of the item to be deleted
    let id = req.params.id;
  //Call the model method deleteTripById
    triplist.deleteTripById(id,(err,trip) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the trip. Error: ${err}`});
        }
        else if(trip) {
            res.json({success:true, id:id, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

router.delete('/', (req,res,next)=> {
    triplist.deleteAllTrips((err,trips) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the trips. Error: ${err}`});
        }
        else if(trips) {
            res.json({success:true, message: "Deleted all trips successfully"});
        }
        else
            res.json({success:false});
    })
});

module.exports = router;