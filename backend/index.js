// connect environment variable 
const { parse } = require('dotenv');
require('dotenv').config();

// connection to express 
const express = require("express");
const app = express();
const port = 3333;

// emable incoming json request req.body
app.use(express.json());

// connection to MongoDB 
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// resolve CORS 
const cors = require('cors');
app.use(cors());

// import schema 
const User = require('./user.js');
const { result } = require('lodash');

// fetch all username and password
app.get('/api/username', (req, res) => {
    database.collection('Username').find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// create an account - this should not be implemented in front end 
app.post('/api/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})

// verify username and password - professor panel 
app.post('/api/login', async (req, res) => {
    if(req.body.username && req.body.password){
        let user = await User.findOne(req.body);
        if(user){
            let admin = await user.admin;
            if(admin) {
                res.send({result:"1"})
            }
            else{
                res.send({result:"2"});
            }
        }
        else{
            res.send({result:"Username or Password is incorrect"});
        }
    }
    else{
        res.send({result:"Username or Password is incorrect"});
    }
});

// fetch by username 
app.get('/api/username/:username', (req, res) => {
    username = req.params.username;
    database.collection('Username').find({username}).toArray((err, result) =>{
        res.send(result);
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