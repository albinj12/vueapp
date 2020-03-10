const mongoose = require('mongoose');

// schema for events
const eventSchema = mongoose.Schema({
    eventTitle: {
        type: String,
        required: true
    },
    eventDes: String,
    eventLoc: String,
    eventDate: Date
})

const event = module.exports = mongoose.model('event', eventSchema)