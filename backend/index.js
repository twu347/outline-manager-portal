// connect environment variable 
const { parse } = require('dotenv');
require('dotenv').config();
const express = require("express");
const router = express.Router(); 
const cors = require('cors');
// connection to express 

const app = express();
const port = 3333;

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});
// emable incoming json request req.body
app.use(express.json());

// connection to MongoDB 
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));



// import User schema 
const User = require('./user.js');

const { result } = require('lodash');

// import Course schema
const Course = require('./course.js')

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

// create a new course
app.post('/api/newcourse', async (req, res) => {
    let exist = await Course.findOne(req.body);
    if(exist){
        res.send("Already exist !")
    }else{
        let course = new Course(req.body);
        let result = await course.save();
        res.send(result);
    }
    
})

// verify username and password then direct to different page
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

app.get('/api/logins', (req, res) => {
    outlines.collection('users').find({}).toArray((err, data) => {
        if (err) throw err;
        const result = data.filter((p)=>p.admin === "false");
        res.json(result);
    });
});

app.get('/api/courses', (req, res) => {
    outlines.collection('courses').find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

app.put('/api/putProf/:username', async (req, res) => {
    let existCourse = await Course.findOne(req.body)
    if(existCourse){
        User.updateOne({username: req.params.username}, {
            // $addToSet is for preventing duplicate element
              $addToSet: {assignedCourse:req.body.courseName}
              
          }).then(result => {
              res.status(200).json({
                  updated_product : result
              })
          })
          .catch(err =>{
              console.log(err);
              res.status(500).json({
                  error:err
              })
          })
    }else{
        res.send({result:"incorrect"});
    }
    
});

app.delete('/api/deleteProf/:username', (req, res) => {
    User.updateOne({username: req.params.username}, {
        $pull: {assignedCourse:req.body.coursename}
        
    }).then(result => {
        res.status(200).json({
            updated_product : result
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});

// fetch by username 
app.get('/api/username/:username', (req, res) => {
    username = req.params.username;
    database.collection('Username').find({username}).toArray((err, result) =>{
        res.send(result);
    });
});



// listen port 3333
app.listen(port, () =>{
    MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('SE3350');
        outlines = result.db('test')
    });
    console.log(`Listing on port ${port}`);
});