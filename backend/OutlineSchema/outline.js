const mongoose = require('mongoose');

// this schema should try to combine with ceab.js schema 
const Outline = new mongoose.Schema({
    courseNumber:{
        type:Number, 
        required:true,
    }, 
    timeStamp:{
        type:String,
        required:true, 
    },
    courseTitle:{
        type:String, 
    }, 
    approved:{
        type: String,
        required: true,
        default: false,
    },
    yearFrom:{
        type:Number, 
    }, 
    comment:{
        type: String,
        required: false,
    },
    yearTo:{
        type:Number, 
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
    }, 
    extension:{
        type:Number, 
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
    // the GA indicator schema 
    knowledge : {
        type : String, 
    }, 
    problem : {
        type : String, 
    },
    investigation : {
        type : String, 
    }, 
    design : {
        type : String, 
    }, 
    tools : {
        type : String, 
    },
    team : {
        type : String, 
    },
    communication : {
        type : String, 
    }, 
    professionalism : {
        type : String, 
    }, 
    impact : {
        type : String, 
    }, 
    ethics : {
        type : String, 
    }, 
    economics : {
        type : String, 
    }, 
    learning : {
        type : String, 
    },
    textarea01 : {
        type : String, 
    },
    textarea02 : {
        type : String, 
    }, 
    textarea03 : {
        type : String,
    }, 
    textarea04 : {
        type : String, 
    }, 
    textarea11 : {
        type : String, 
    }, 
    textarea12 : {
        type : String, 
    }, 
    textarea13 : {
        type : String, 
    }, 
    textarea14 : {
        type : String, 
    }, 
    textarea21 : {
        type : String, 
    }, 
    textarea22 : {
        type : String, 
    }, 
    textarea23 : {
        type : String, 
    }, 
    textarea24 : {
        type : String, 
    }, 
    textarea31 : {
        type : String, 
    }, 
    textarea32 : {
        type : String, 
    }, 
    textarea33 : {
        type : String, 
    }, 
    textarea34 : {
        type : String, 
    }, 
    GAType1 : {
        type : String, 
        enum: ['KB', 'PA', 'I', 'D', 'ET', 'ITW', 'CS', 'PR', 'IESE', 'EE', 'EPM', 'LL', ''],
    }, 
    GAType2 : {
        type : String, 
        enum: ['KB', 'PA', 'I', 'D', 'ET', 'ITW', 'CS', 'PR', 'IESE', 'EE', 'EPM', 'LL', ''],
    }, 
    GAType3 : {
        type : String, 
        enum: ['KB', 'PA', 'I', 'D', 'ET', 'ITW', 'CS', 'PR', 'IESE', 'EE', 'EPM', 'LL', ''],
    }, 
    GAType4 : {
        type : String, 
        enum: ['KB', 'PA', 'I', 'D', 'ET', 'ITW', 'CS', 'PR', 'IESE', 'EE', 'EPM', 'LL', ''],
    }, 
    GAValue1 : {
        type : String, 
        enum: ['1', '2', '3', '4', ''],
    }, 
    GAValue2 : {
        type : String, 
        enum: ['1', '2', '3', '4', ''],
    }, 
    GAValue3 : {
        type : String, 
        enum: ['1', '2', '3', '4', ''],
    }, 
    GAValue4 : {
        type : String, 
        enum: ['1', '2', '3', '4', ''],
    }, 
    gradeHomework : {
        type : String, 
    }, 
    gradeQuiz : {
        type : String, 
    }, 
    gradeLab : {
        type : String, 
    }, 
    gradeMidterm : {
        type : String, 
    }, 
    homeworkAssignment : {
        type : String, 
    }, 
    quizzes : {
        type : String, 
    }, 
    lab : {
        type : String, 
    }, 
    midterm : {
        type : String, 
    }, 
    latePolicy : {
        type : String, 
    }, 
    locker : {
        type : String, 
    }, 
    mobileDevice : {
        type : String, 
    }, 
    clicker : {
        type : String, 
    }
});

const model = mongoose.model('Outline', Outline);
module.exports = model;
