// this file is professor panel user account schema
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username : {
        type : String, 
        unique : true,
        required : true,
    },
    password : {
        type : String, 
        required : true,
    },
});

const model = mongoose.model('User', User);
module.exports = model;


