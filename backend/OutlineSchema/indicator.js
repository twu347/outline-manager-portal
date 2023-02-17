const mongoose = require('mongoose');

const Indicator = new mongoose.Schema({
    indicatorName : {
        type : String, 
        unique : true,
        required : true,
    },
    data: {
        type: Array,
        required: true
    }
    

});

const model = mongoose.model('Indicator', Indicator);
module.exports = model;

