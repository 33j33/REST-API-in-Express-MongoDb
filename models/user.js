const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    followedChannels: {
        type: [String],
        required: true
    },
    registeredDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// Creating a model from the userSchema and this user model will be used to save documents
module.exports = mongoose.model('User', userSchema)