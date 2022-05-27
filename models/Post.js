const mongoose = require('mongoose');


const FEED = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('feed', FEED)