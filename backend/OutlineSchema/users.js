const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    userName : {
        type : String, 
        required : true,
    }, 
    password : {
        type : String,
        required : true, 
    }, 
});

const model = mongoose.model('users', Users);
module.exports = model;
