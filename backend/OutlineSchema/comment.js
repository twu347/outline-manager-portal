// this file is course outline schema (first page)
const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    courseNumber : {
        type : String, 
        required : true,
    }, 
    profName : {
        type : String,
        required : true,
    },
    comment:{
        type: String,
        required: true,
    },
});

const model = mongoose.model('comment', Comment);
module.exports = model;