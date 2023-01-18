// connect environment variable 
const { parse } = require('dotenv');
require('dotenv').config();

// connection to express 
const express = require("express");
const app = express();
const port = 3333;

// connection to MongoDB 
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// fetch all username 
app.get('/api/username', (req, res) => {
    database.collection('Username').find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// get method testing 
app.get('/', (req, res) => {
    res.send('Hello World');
});

// listen port 3333
app.listen(port, () =>{
    MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('SE3350');
    });
    console.log(`Listing on port ${port}`);
});