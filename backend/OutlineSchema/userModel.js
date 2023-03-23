const mongoose = require('mongoose'); 

// define user schema 
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'username is required']
    }, 
    password: {
        type: String, 
        required: [true, 'password is required']
    }
}, {
    timestamps: true, 
});

module.exports = mongoose.model('JWT', userSchema);