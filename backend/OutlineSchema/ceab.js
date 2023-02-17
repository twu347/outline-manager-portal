// this file is used to define schema for ceab attributes table 
const mongoose = require('mongoose');

const CEAB = new mongoose.Schema({
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
    }
});

const model = mongoose.model('CEAB', CEAB);
module.exports = model;
