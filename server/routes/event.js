const express = require('express');

const router = express.Router();

let eventModel = require('../models/eventmodel');

// Routes

// get events
router
    .route('/')
    .get((req, res) => {
        eventModel.find({},(err, events) => {
            if(err){
                res.json({message: "Error while fetching events"})
            }else{
                res.json({message:events})
            }
        })
    });

// add events
router
    .route('/addevent')
    .post((req, res) => {
        req.checkBody('title','Title is required').notEmpty();
        req.checkBody('des', 'Description is required').notEmpty();
        let errors = req.validationErrors();

        if(errors){
            res.json({ message: "Enter complete details" });
        }else{
            let newEvent = new eventModel();
            newEvent.eventTitle = req.body.title;
            newEvent.eventDes = req.body.des;
            newEvent.eventLoc = req.body.loc;
            newEvent.eventDate = req.body.date;

            newEvent.save(err => {
              if (err) {
                res.json({ message: "Error while adding event" });
              } else {
                res.json({ message: "Event added" });
              }
            });
        }
        console.log(req.body);
    })

module.exports = router;