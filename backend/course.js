const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    courseName : {
        type : String, 
        unique : true,
        required : true,
    },
    

});

const model = mongoose.model('Course', Course);
module.exports = model;

