// this file is course outline schema (first page)
const mongoose = require('mongoose');

const Page1 = new mongoose.Schema({
    title : {
        type : String, 
        required : true,
    }, 
    courseName : {
        type : String, 
        required : true, 
    },
    description : {
        type : String, 
        required : true,
    }, 
    instructor : {
        type : String, 
        required : true, 
    }, 
    aca : {
        type : String, 
        required : true, 
    },
    hours : {
        type : String, 
        required : true,
    },
    prerequisites : {
        type : String, 
        required : true, 
    }, 
    corequisite : {
        type : String, 
        required : true, 
    }, 
    notice : {
        type : String, 
        required : true,
    }, 
    CEAB : {
        type : String, 
        required : true, 
    }, 
    textbook : {
        type : String, 
        required : true,
    }
});

const model = mongoose.model('Page1', Page1);
module.exports = model;
