// connect environment variable 
const { parse } = require('dotenv');
require('dotenv').config();
const express = require("express");
const router = express.Router(); 
const cors = require('cors');

// connection to express 
const app = express();
const port = 3333;

// set cors 
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}


// set cors headers
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
app.use(express.urlencoded({ extended: false }));

// use body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }));

// connection to MongoDB 
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
mongoose.set('strictQuery', false);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// import schema 
const User = require('./user.js');
const Page1 = require('./OutlineSchema/page1.js');
const CEAB = require('./OutlineSchema/ceab.js');
const Topics = require('./OutlineSchema/topics.js');
const Outline = require('./OutlineSchema/outline.js');
const Course = require('./course.js');
// require lodash
const { result } = require('lodash');

// fetch all username and password
app.get('/api/username', (req, res) => {
    database.collection('Username').find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

app.get('/api/courseOutlines', (req, res) => {
     
    outlines.collection('outlines').find({}).toArray((err, data) => {
        if (err) throw err;
        
        res.json(data);
    });
});

// fetch all outlines
app.get('/api/courseOutlines', (req, res) => {
     
    outlines.collection('outlines').find({}).toArray((err, data) => {
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

// get all information with course number and instructor name
app.get('/api/getInfo/:courseNumber/:profName', (req, res) => {
    outlines.collection('outlines').find({"courseNumber": parseInt(req.params.courseNumber), "profName": req.params.profName }).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// change course outline base on instructor name and course number 
app.put('/api/putInfo/:courseNumber/:profName', (req, res) => {
    Outline.updateOne({courseNumber: req.params.courseNumber, profName: req.params.profName},{
        $set:{
        timeStamp : req.body.timeStamp,
        courseTitle : req.body.courseTitle, 
        yearFrom : req.body.yearFrom, 
        yearTo : req.body.yearTo, 
        description : req.body.description, 
        profName : req.body.profName, 
        office : req.body.office, 
        extension : req.body.extension, 
        email : req.body.email, 
        consultation : req.body.consultation, 
        calender : req.body.calender, 
        lectureHours : req.body.lectureHours, 
        labHours : req.body.labHours, 
        tutHours : req.body.tutHours, 
        antirequisite : req.body.antirequisite, 
        prerequisites : req.body.prerequisites, 
        corequisite : req.body.corequisite, 
        CEABScience : req.body.CEABScience, 
        CEABDesign : req.body.CEABDesign, 
        textbook : req.body.textbook, 
        requiredRef : req.body.requiredRef, 
        recommendRef : req.body.recommendRef,
        knowledge : req.body.knowledge, 
        problem : req.body.problem, 
        investigation : req.body.investigation, 
        design : req.body.design, 
        tools : req.body.tools, 
        team : req.body.team, 
        communication : req.body.communication, 
        professionalism : req.body.professionalism, 
        impact : req.body.impact, 
        ethics : req.body.ethics, 
        economics : req.body.economics, 
        learning : req.body.learning, 
        textarea01 : req.body.textarea01, 
        textarea02 : req.body.textarea02, 
        textarea03 : req.body.textarea03, 
        textarea04 : req.body.textarea04, 
        textarea11 : req.body.textarea11, 
        textarea12 : req.body.textarea12, 
        textarea13 : req.body.textarea13, 
        textarea14 : req.body.textarea14, 
        textarea21 : req.body.textarea21, 
        textarea22 : req.body.textarea22, 
        textarea23 : req.body.textarea23, 
        textarea24 : req.body.textarea24, 
        textarea31 : req.body.textarea31, 
        textarea32 : req.body.textarea32, 
        textarea33 : req.body.textarea33, 
        textarea34 : req.body.textarea34, 
        GAType1 : req.body.GAType1, 
        GAType2 : req.body.GAType2, 
        GAType3 : req.body.GAType3, 
        GAType4 : req.body.GAType4, 
        GAValue1 : req.body.GAValue1, 
        GAValue2 : req.body.GAValue2, 
        GAValue3 : req.body.GAValue3, 
        GAValue4 : req.body.GAValue4, 
        gradeHomework : req.body.gradeHomework, 
        gradeQuiz : req.body.gradeQuiz, 
        gradeLab : req.body.gradeLab, 
        gradeMidterm : req.body.gradeMidterm, 
        homeworkAssignment : req.body.homeworkAssignment, 
        quizzes : req.body.quizzes, 
        lab : req.body.lab, 
        midterm : req.body.midterm, 
        latePolicy : req.body.latePolicy, 
        locker : req.body.locker, 
        mobileDevice : req.body.mobileDevice, 
        clicker : req.body.clicker,
        approved: req.body.approved,
        }
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

// fetch outlines in outline collection 
app.get('/api/getDoc', (req, res) => {
    outlines.collection('outlines').find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// create a new course outline 
app.post('/api/outline', async(req, res) => {
    let input = new Outline({
        timeStamp : req.body.timeStamp,
        courseNumber : req.body.courseNumber, 
        courseTitle : req.body.courseTitle, 
        yearFrom : req.body.yearFrom, 
        yearTo : req.body.yearTo, 
        description : req.body.description, 
        profName : req.body.profName, 
        office : req.body.office, 
        extension : req.body.extension, 
        email : req.body.email, 
        consultation : req.body.consultation, 
        calender : req.body.calender, 
        lectureHours : req.body.lectureHours, 
        labHours : req.body.labHours, 
        tutHours : req.body.tutHours, 
        antirequisite : req.body.antirequisite, 
        prerequisites : req.body.prerequisites, 
        corequisite : req.body.corequisite, 
        CEABScience : req.body.CEABScience, 
        CEABDesign : req.body.CEABDesign, 
        textbook : req.body.textbook, 
        requiredRef : req.body.requiredRef, 
        recommendRef : req.body.recommendRef,
        knowledge : req.body.knowledge, 
        problem : req.body.problem, 
        investigation : req.body.investigation, 
        design : req.body.design, 
        tools : req.body.tools, 
        team : req.body.team, 
        communication : req.body.communication, 
        professionalism : req.body.professionalism, 
        impact : req.body.impact, 
        ethics : req.body.ethics, 
        economics : req.body.economics, 
        learning : req.body.learning, 
        textarea01 : req.body.textarea01, 
        textarea02 : req.body.textarea02, 
        textarea03 : req.body.textarea03, 
        textarea04 : req.body.textarea04, 
        textarea11 : req.body.textarea11, 
        textarea12 : req.body.textarea12, 
        textarea13 : req.body.textarea13, 
        textarea14 : req.body.textarea14, 
        textarea21 : req.body.textarea21, 
        textarea22 : req.body.textarea22, 
        textarea23 : req.body.textarea23, 
        textarea24 : req.body.textarea24, 
        textarea31 : req.body.textarea31, 
        textarea32 : req.body.textarea32, 
        textarea33 : req.body.textarea33, 
        textarea34 : req.body.textarea34, 
        GAType1 : req.body.GAType1, 
        GAType2 : req.body.GAType2, 
        GAType3 : req.body.GAType3, 
        GAType4 : req.body.GAType4, 
        GAValue1 : req.body.GAValue1, 
        GAValue2 : req.body.GAValue2, 
        GAValue3 : req.body.GAValue3, 
        GAValue4 : req.body.GAValue4, 
        gradeHomework : req.body.gradeHomework, 
        gradeQuiz : req.body.gradeQuiz, 
        gradeLab : req.body.gradeLab, 
        gradeMidterm : req.body.gradeMidterm, 
        homeworkAssignment : req.body.homeworkAssignment, 
        quizzes : req.body.quizzes, 
        lab : req.body.lab, 
        midterm : req.body.midterm, 
        latePolicy : req.body.latePolicy, 
        locker : req.body.locker, 
        mobileDevice : req.body.mobileDevice, 
        clicker : req.body.clicker,
        approved: req.body.approved,
    });
    let result = await input.save(); 
    res.send(result);
})

// assign CEAB attributes 
app.post('/api/ceab', async (req, res) => {
    let ceab = new CEAB({
        knowledge : req.body.knowledge, 
        problem : req.body.problem, 
        investigation : req.body.investigation, 
        design : req.body.design, 
        tools : req.body.tools,
        team : req.body.team, 
        communication : req.body.communication, 
        professionalism : req.body.professionalism, 
        impact : req.body.impact, 
        ethics : req.body.ethics, 
        economics : req.body.economics, 
        learning : req.body.learning,
    }); 
    let result = await ceab.save(); 
    res.send(result);
}); 

// create course topics and specific learning outcomes 
app.post('/api/topics', async (req, res) => {
    let topics = new Topics({
        courseNumber : req.body.courseNumber,
        topic : req.body.topic, 
        CEAB : req.body.CEAB,
    });
    let result = await topics.save();
    res.send(result)
});

// update course outline first page
app.put('/api/outline1/:_id', async(req, res) => {
    Page1.findOneAndUpdate({_id : req.params._id}, {
        $set : {
            title : req.body.title, 
            courseName : req.body.courseName,  
	        description : req.body.description, 
	        instructor : req.body.instructor,  
	        aca : req.body.aca, 
	        hours : req.body.hours, 
	        prerequisites : req.body.prerequisites, 
	        corequisite : req.body.corequisite, 
	        notice : req.body.notice,
	        CEAB : req.body.CEAB,
	        textbook : req.body.textbook,
        }
    }).then(result => {
        res.status(200).json({
            update_product : result
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
});

// update course outline first page
app.put('/api/outline/:_id', async(req, res) => {
    Outline.findOneAndUpdate({_id : req.params._id}, {
        $set : {
            approved : "true", 
        }
    }).then(result => {
        res.status(200).json({
            update_product : result
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
});

// update CEAB attributes
app.put('/api/ceab/:_id', async(req, res) => {
    CEAB.findOneAndUpdate({_id : req.params._id}, {
        $set : {
            knowledge : req.body.knowledge, 
            problem : req.body.problem, 
            investigation : req.body.investigation, 
            design : req.body.design, 
            tools : req.body.tools,
            team : req.body.team, 
            communication : req.body.communication, 
            professionalism : req.body.professionalism, 
            impact : req.body.impact, 
            ethics : req.body.ethics, 
            economics : req.body.economics, 
            learning : req.body.learning,
        }
    }).then(result => {
        res.status(200).json({
            update_product : result
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
});

// update course topics and specific learning outcomes 
app.put('/api/topics/:courseNumber', async(req, res) => {
    Topics.findOneAndUpdate({courseNumber : req.params.courseNumber}, {
        $set : {
            topic : req.body.topic, 
            CEAB : req.body.CEAB,
        }
    }).then(result => {
        res.status(200).json({
            update_product : result
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
});

// delete course outline first page
app.delete('/api/outline1/:_id', async(req, res) => {
    let pending = req.params._id;
    Page1.findOneAndDelete(({_id: pending}), function(err, docs){
        res.send(docs);
    });
});

// delete CEAB attributes 
app.delete('/api/ceab/:_id', async(req, res) => {
    let pending = req.params._id; 
    CEAB.findOneAndDelete(({_id: pending}), function(err, docs){
        res.send(docs);
    });
})

// delete course topics and specific learning outcomes 
app.delete('/api/topics/:courseNumber', async(req, res) => {
    let pending = req.params.courseNumber; 
    Topics.findOneAndDelete(({courseNumber: pending}), function(err, docs){
        res.send(docs);
    });
});

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

// login for instructors 
app.get('/api/logins', (req, res) => {
    outlines.collection('users').find({}).toArray((err, data) => {
        if (err) throw err;
        const result = data.filter((p)=>p.admin === "false");
        res.json(result);
    });
});

// fetch all the courses 
app.get('/api/courses', (req, res) => {
    outlines.collection('courses').find({}).toArray((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

// assign course based on instructor's username 
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
    }
    else{
        res.send({result:"incorrect"});
    }
});

// delete an assigned course based on instructor username 
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