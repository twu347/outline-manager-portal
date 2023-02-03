const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

// this schema should try to combine with ceab.js schema 
const Outline = new mongoose.Schema({
    courseNumber:{
        type:Number, 
        required:true,
    }, 
    courseTitle:{
        type:String, 
    }, 
    yearFrom:{
        type:Number, 
        min:00, 
        max:99,
    }, 
    yearTo:{
        type:Number, 
        min:00, 
        max:99, 
    },
    description:{
        type:String,
    },
    profName:{
        type:String, 
        required:true, 
    }, 
    office:{
        type:Number, 
        min:000, 
        max:999,
    }, 
    extension:{
        type:Number, 
        min:00000, 
        max:99999,
    }, 
    email:{
        type:String, 
    }, 
    consultation:{
        type:String, 
    },
    calender:{
        type:String, 
    }, 
    lectureHours:{
        type:Number,  
    }, 
    labHours:{
        type:Number, 
    }, 
    tutHours:{
        type:Number,
    }, 
    antirequisite:{
        type:String, 
    }, 
    prerequisites:{
        type:String, 
    }, 
    corequisite:{
        type:String, 
    }, 
    CEABScience:{
        type:Number,
    }, 
    CEABDesign:{
        type:Number, 
    }, 
    textbook:{
        type:String, 
    }, 
    requiredRef:{
        type:String, 
    }, 
    recommendRef:{
        type:String, 
    }, 

});

const model = mongoose.model('Outline', Outline);
module.exports = model;
