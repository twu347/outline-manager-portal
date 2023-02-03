// this file is course outline schema (first page)
const mongoose = require('mongoose');

const Topics = new mongoose.Schema({
    courseNumber : {
        type : String, 
        required : true,
    }, 
    topic : {
        type : String,
        required : true, 
    }, 
    CEAB : {
        type : String,
        required : true,
    },
});

const model = mongoose.model('topics', Topics);
module.exports = model;
